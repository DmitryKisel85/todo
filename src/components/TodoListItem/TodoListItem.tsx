import React, { useState, useRef, useLayoutEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks";

import { motion } from "framer-motion";

import TextareaAutosize from "react-textarea-autosize";

import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";

import { toggleCompleted, editTodo, deleteTodo } from "store/todos/todosSlice";
import { todoByIdSelector } from "store/todos/todosSelector";

import Button from "components/Button";
import styles from "./todoListItem.module.scss";

// объект с настройками анимации Framer Motion
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

const TodoListItem: React.FC<ITodoListItemProps> = ({ id }) => {
	const dispatch = useAppDispatch();

	const [todo] = useAppSelector(todoByIdSelector(id));
	const { description, completed } = todo;

	// Стейт для изменения аттрибута ReadOnly у каждого туду
	const [readOnlyState, setReadOnlyState] = useState<boolean>(true);

	// Используем useRef и useLayoutEffect для установки фокуса на textarea при редактировании туду
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
	useLayoutEffect(() => {
		textAreaRef.current?.focus();
	}, [readOnlyState]);

	// изменение стейта аттрибута ReadOnly для возможности\невозможности редактирования туду
	const validateEditing = () => {
		description === "" ? dispatch(deleteTodo(id)) : setReadOnlyState(true);
	};

	// выполнение туду
	const handleChange = () => {
		dispatch(toggleCompleted(id));
	};

	// редактирование туду
	const handleEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(editTodo({ id: id, updatedValue: e.currentTarget.value }));
	};
	// удаление туду
	const handleDelete = () => {
		dispatch(deleteTodo(id));
	};

	return (
		<motion.li
			className={styles.todoItem}
			key={id}
			initial='hidden'
			animate='visible'
			exit='hidden'
			variants={variants}
			layoutId={id}>
			<input
				type='checkbox'
				id={`btn-complete-${id}`}
				className={styles.btnComplete}
				onChange={handleChange}
				defaultChecked={completed}
			/>
			<label htmlFor={`btn-complete-${id}`}></label>
			<TextareaAutosize
				className={styles.description}
				readOnly={readOnlyState}
				value={description}
				onDoubleClick={() => setReadOnlyState(false)}
				onChange={handleEdit}
				ref={textAreaRef}
				onBlur={validateEditing}></TextareaAutosize>

			{readOnlyState ? (
				<Button className={styles.btnTodolistitem} key='edit' onClick={() => setReadOnlyState(false)}>
					<FaEdit />
				</Button>
			) : (
				<Button className={styles.btnTodolistitem} key='check' onClick={validateEditing}>
					<FaCheck />
				</Button>
			)}

			<Button className={styles.btnTodolistitem} onClick={handleDelete}>
				<FaTimes />
			</Button>
		</motion.li>
	);
};

export default TodoListItem;
