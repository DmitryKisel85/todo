import { useRef, useEffect } from "react";
import { useAppDispatch } from "@hooks/hooks";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";

import { addTodo } from "@store/todos/todosSlice";

import styles from "./inputTodo.module.scss";

const InputTodo: React.FC = () => {
	const dispatch = useAppDispatch();

	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	//добавляем туду
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		let userInput = inputRef.current?.value;

		// проверка на пустую строку и пробелы
		if (!userInput || userInput.match(/^[ ]+$/)) return;

		const newTodo = {
			id: uuidv4(),
			description: userInput,
			completed: false,
		};

		dispatch(addTodo(newTodo));

		if (inputRef.current) {
			setTimeout(() => {
				inputRef.current?.focus();
			}, 0);

			inputRef.current.value = "";
		}
	};

	return (
		<form className={styles.inputWrapper} onSubmit={handleSubmit}>
			<input type='text' className={styles.inputMain} placeholder='What are we going to do?' ref={inputRef} />
			<motion.button
				type='submit'
				whileTap={{ scale: 0.95 }}
				whileHover={{ cursor: "pointer", scale: 1.1, filter: "brightness(1.5)" }}
				className={styles.btnAdd}>
				<FaPlus className={styles.addIcon} />
			</motion.button>
		</form>
	);
};

export default InputTodo;
