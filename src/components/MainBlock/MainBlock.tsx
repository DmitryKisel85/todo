import InputTodo from "components/InputTodo";
import TodosCounter from "components/TodosCounter";
import FilterBlock from "components/FilterBlock";
import ClearBlock from "components/ClearBlock";
import TodoList from "components/TodoList";

import styles from "./mainBlock.module.scss";

const MainBlock: React.FC = () => {
	return (
		<main className={styles.root}>
			<InputTodo />
			<TodoList />
			<TodosCounter />
			<FilterBlock />
			<ClearBlock />
		</main>
	);
};

export default MainBlock;
