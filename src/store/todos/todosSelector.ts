import { createSelector } from "@reduxjs/toolkit";
import { selectActiveFilter } from "@store/filter/filterSelector";

import type { RootState } from "..";

export const selectTodos = (state: RootState) => state.todos.todos;

export const todoByIdSelector = (id: string) => createSelector([selectTodos], (todos) => todos.filter((todo) => todo.id === id));

export const todosLeftSelector = createSelector([selectTodos], (todos) => todos.filter((todo) => !todo.completed).length);

export const filteredTodosSelector = createSelector([selectActiveFilter, selectTodos], (filter, todos) => {
	switch (filter) {
		case "all":
			return todos;
		case "active":
			return todos.filter((todo) => !todo.completed);
		case "completed":
			return todos.filter((todo) => todo.completed);
		default:
			return todos;
	}
});
