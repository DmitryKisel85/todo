import { useAppSelector } from "hooks";

import { filteredTodosSelector } from "store/todos/todosSelector";

import { TodoListItem } from "components/TodoListItem";

import s from "./todoList.module.scss";

const TodoList = () => {
	const filteredTodos = useAppSelector(filteredTodosSelector);

	return (
		<ul className={s.root}>
			{filteredTodos.map(({ id }) => {
				return <TodoListItem key={id} id={id} />;
			})}
		</ul>
	);
};

export { TodoList };
