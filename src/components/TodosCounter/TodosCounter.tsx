import { useAppSelector } from "hooks/hooks";
import { todosLeftSelector } from "store/todos/todosSelector";

import styles from "./todosCounter.module.scss";

const TodosCounter: React.FC = () => {
	const todosLeftToDo = useAppSelector(todosLeftSelector);

	return <div className={styles.todoCount}>Things left to do: {todosLeftToDo}</div>;
};

export default TodosCounter;
