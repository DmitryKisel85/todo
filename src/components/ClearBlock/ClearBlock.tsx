import { useAppDispatch } from "hooks";
import { clearAllTodos, clearCompletedTodos } from "store/todos/todosSlice";

import Button from "components/Button";

import styles from "./clearBlock.module.scss";

const ClearBlock: React.FC = () => {
	const dispatch = useAppDispatch();

	// удаление всех туду
	const handleClearAllTodos = () => {
		dispatch(clearAllTodos());
	};

	// удаление завершенных туду
	const handleClearCompletedTodos = () => {
		dispatch(clearCompletedTodos());
	};

	return (
		<div className={styles.clearBlock}>
			<Button className={styles.btnClear} onClick={handleClearAllTodos}>
				Clear All
			</Button>
			<Button className={styles.btnClear} onClick={handleClearCompletedTodos}>
				Clear Completed
			</Button>
		</div>
	);
};

export default ClearBlock;
