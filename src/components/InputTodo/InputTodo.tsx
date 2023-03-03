import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import { addTodo } from "store/todos/todosSlice";
import { useAppDispatch } from "hooks";

import { FaPlus } from "react-icons/fa";

import s from "./inputTodo.module.scss";

const InputTodo = () => {
	const dispatch = useAppDispatch();

	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!inputRef.current) throw Error("inputRef is not assigned");

		let userInput = inputRef.current.value;

		if (userInput.match(/^[ ]+$/)) return;

		const newTodo = {
			id: uuidv4(),
			description: userInput,
			completed: false,
		};

		dispatch(addTodo(newTodo));

		setTimeout(() => {
			inputRef.current?.focus();
		}, 0);

		inputRef.current.value = "";
	};

	return (
		<form className={s.form} onSubmit={handleSubmit}>
			<input type='text' className={s.input} placeholder='What are we going to do?' ref={inputRef} />
			<motion.button
				type='submit'
				whileTap={{ scale: 0.95 }}
				whileHover={{ cursor: "pointer", scale: 1.1, filter: "brightness(1.5)" }}
				className={s.btn}>
				<FaPlus className={s.icon} />
			</motion.button>
		</form>
	);
};

export default InputTodo;
