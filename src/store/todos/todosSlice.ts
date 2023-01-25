import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
	id: string;
	description: string;
	completed: boolean;
};

export type EditTodo = {
	id: string;
	updatedValue: string;
};

export type TodosState = {
	todos: Todo[];
};

export const initialState: TodosState = {
	todos: [],
};

const todosSlice = createSlice({
	name: "todosReducer",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		toggleCompleted: (state, action: PayloadAction<string>) => {
			const completedTodo = state.todos.find((todo) => todo.id === action.payload);
			if (completedTodo) {
				completedTodo.completed = !completedTodo.completed;
			}
		},
		editTodo: (state, action: PayloadAction<EditTodo>) => {
			const editedTodo = state.todos.find((todo) => todo.id === action.payload.id);
			if (editedTodo) {
				editedTodo.description = action.payload.updatedValue;
			}
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => {
				return action.payload !== todo.id;
			});
		},
		clearAllTodos: (state) => {
			state.todos = [];
		},
		clearCompletedTodos: (state) => {
			state.todos = state.todos.filter((todo) => {
				return !todo.completed;
			});
		},
	},
});

const { actions, reducer } = todosSlice;

export default reducer;

export const { addTodo, toggleCompleted, editTodo, deleteTodo, clearAllTodos, clearCompletedTodos } = actions;
