import { useAppSelector } from "../../hooks/hooks";

import { filteredTodosSelector } from "@store/todos/todosSelector";

import TodoListItem from "@components/TodoListItem";

import styles from "./todoList.module.scss";

const TodoList: React.FC = () => {
	const filteredTodos = useAppSelector(filteredTodosSelector);

	const renderedTodos = filteredTodos.map(({ id }) => {
		return <TodoListItem key={id} id={id} />;
	});
	return <ul className={styles.todosWrapper}>{renderedTodos}</ul>;
};

export default TodoList;
