import { useAppDispatch } from "hooks";

import { clearAllTodos, clearCompletedTodos } from "store/todos/todosSlice";

import { Button } from "components/Button";

import s from "./clearBlock.module.scss";

const ClearBlock = () => {
	const dispatch = useAppDispatch();

	const handleClearAllTodos = () => {
		dispatch(clearAllTodos());
	};

	const handleClearCompletedTodos = () => {
		dispatch(clearCompletedTodos());
	};

	return (
		<div className={s.root}>
			<Button className={s.btn} handleClick={handleClearAllTodos}>
				Clear All
			</Button>
			<Button className={s.btn} handleClick={handleClearCompletedTodos}>
				Clear Completed
			</Button>
		</div>
	);
};

export { ClearBlock };
