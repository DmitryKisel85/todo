import { InputTodo } from "components/InputTodo";
import { TodosCounter } from "components/TodosCounter";
import { FilterBlock } from "components/FilterBlock";
import { ClearBlock } from "components/ClearBlock";
import { TodoList } from "components/TodoList";

import s from "./mainBlock.module.scss";

const MainBlock = () => {
	return (
		<main className={s.root}>
			<InputTodo />
			<TodoList />
			<TodosCounter />
			<FilterBlock />
			<ClearBlock />
		</main>
	);
};

export { MainBlock };
