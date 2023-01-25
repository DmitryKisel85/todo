import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithContext } from "@utils/test-utils";

import InputTodo from "@components/InputTodo";

import { RootState } from "@store/index";
import todosReducer, { initialState, addTodo, deleteTodo, toggleCompleted, editTodo, clearAllTodos, clearCompletedTodos, Todo } from "@store/todos/todosSlice";
import { selectTodos, todoByIdSelector, todosLeftSelector, filteredTodosSelector } from "@store/todos/todosSelector";

it("should show input value and reset it after submitting", async () => {
	renderWithContext(<InputTodo />);

	const inputElement: HTMLInputElement = screen.getByRole("textbox");
	const addButton = screen.getByRole("button");

	await userEvent.type(inputElement, "Swim");
	expect(screen.getByDisplayValue("Swim")).toBeInTheDocument();
	await userEvent.click(addButton);
	expect(screen.getByDisplayValue("")).toBeInTheDocument();
});
