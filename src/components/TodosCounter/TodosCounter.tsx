import { todosLeftSelector } from "store/todos/todosSelector";
import { useAppSelector } from "hooks";

import s from "./todosCounter.module.scss";

const TodosCounter = () => {
	const todosLeftToDo = useAppSelector(todosLeftSelector);

	return <div className={s.root}>Things left to do: {todosLeftToDo}</div>;
};

export { TodosCounter };
