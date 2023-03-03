import { useState, useRef, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { motion } from "framer-motion";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "hooks";

import { toggleCompleted, editTodo, deleteTodo } from "store/todos/todosSlice";
import { todoByIdSelector } from "store/todos/todosSelector";

import { Button } from "components/Button";

import s from "./todoListItem.module.scss";

const variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
};

interface ITodoListItemProps {
	id: string;
}

const TodoListItem = ({ id }: ITodoListItemProps) => {
	const dispatch = useAppDispatch();

	const [todo] = useAppSelector(todoByIdSelector(id));
	const { description, completed } = todo;

	const [readOnlyState, setReadOnlyState] = useState<boolean>(true);
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

	const validateEditing = () => {
		description === "" ? dispatch(deleteTodo(id)) : setReadOnlyState(true);
	};

	const handleChange = () => {
		dispatch(toggleCompleted(id));
	};

	const handleEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(editTodo({ id: id, updatedValue: e.currentTarget.value }));
	};

	const handleDelete = () => {
		dispatch(deleteTodo(id));
	};

	useEffect(() => {
		textAreaRef.current?.focus();
	}, [readOnlyState]);

	return (
		<motion.li
			className={s.root}
			key={id}
			initial='hidden'
			animate='visible'
			exit='hidden'
			variants={variants}
			layoutId={id}>
			<input
				type='checkbox'
				id={`btn-complete-${id}`}
				className={s.checkbox}
				onChange={handleChange}
				defaultChecked={completed}
			/>
			<label htmlFor={`btn-complete-${id}`}></label>
			<TextareaAutosize
				className={s.textarea}
				readOnly={readOnlyState}
				value={description}
				onDoubleClick={() => setReadOnlyState(false)}
				onChange={handleEdit}
				ref={textAreaRef}
				onBlur={validateEditing}
			/>

			{readOnlyState ? (
				<Button className={s.btn} key='edit' handleClick={() => setReadOnlyState(false)}>
					<FaEdit />
				</Button>
			) : (
				<Button className={s.btn} key='check' handleClick={validateEditing}>
					<FaCheck />
				</Button>
			)}

			<Button className={s.btn} handleClick={handleDelete}>
				<FaTimes />
			</Button>
		</motion.li>
	);
};

export { TodoListItem };
