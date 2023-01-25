import { RootState } from "@store/index";
import todosReducer, { initialState, addTodo, deleteTodo, toggleCompleted, editTodo, clearAllTodos, clearCompletedTodos, Todo } from "@store/todos/todosSlice";
import { selectTodos, todoByIdSelector, todosLeftSelector, filteredTodosSelector } from "@store/todos/todosSelector";

describe("tests for todosSlice", () => {
	it("initialize slice with initialValue", () => {
		const todosSliceInit = todosReducer(initialState, { type: "unknown" });
		expect(todosSliceInit).toBe(initialState);
	});
});

describe("tests for todos reducers", () => {
	const testTodo = {
		id: "123",
		description: "This is for the test section",
		completed: false,
	};

	it("should add Todo to state", () => {
		const result = todosReducer(initialState, addTodo(testTodo));
		const expected = { todos: [testTodo] };
		expect(result).toEqual(expected);
	});

	it("should remove Todo from state", () => {
		const state = { todos: [testTodo] };
		const result = todosReducer(state, deleteTodo("123"));
		expect(result).toEqual(initialState);
	});

	it("should complete Todo", () => {
		const state = { todos: [testTodo] };
		const result = todosReducer(state, toggleCompleted("123"));
		const expected = {
			todos: [
				{
					id: "123",
					description: "This is for the test section",
					completed: true,
				},
			],
		};
		expect(result).toEqual(expected);
	});
	it("should edit Todo's description", () => {
		const state = { todos: [testTodo] };
		const result = todosReducer(state, editTodo({ id: "123", updatedValue: "This is updated description" }));
		const expected = {
			todos: [
				{
					id: "123",
					description: "This is updated description",
					completed: false,
				},
			],
		};
		expect(result).toEqual(expected);
	});
	it("should clear all Todos", () => {
		const state = { todos: [testTodo] };
		const result = todosReducer(state, clearAllTodos());
		expect(result).toEqual(initialState);
	});

	it("should clear completed Todos", () => {
		const state = {
			todos: [
				{
					id: "123",
					description: "Not-completed",
					completed: false,
				},
				{
					id: "1234",
					description: "Completed",
					completed: true,
				},
			],
		};
		const result = todosReducer(state, clearCompletedTodos());
		const expected = {
			todos: [
				{
					id: "123",
					description: "Not-completed",
					completed: false,
				},
			],
		};
		expect(result).toEqual(expected);
	});
});

describe("test for todos selectors", () => {
	const testTodosArray = [
		{
			id: "123",
			description: "first todo",
			completed: false,
		},
		{
			id: "456",
			description: "second todo",
			completed: true,
		},
	];

	it("should return [] with no items", () => {
		const todos = initialState;
		const result = selectTodos({ todos } as RootState);
		const expected: Todo[] = [];
		expect(result).toEqual(expected);
	});

	it("should return testTodo", () => {
		const todos = {
			todos: testTodosArray,
		};
		const receivedTodos = selectTodos({ todos } as RootState);
		const expected = testTodosArray;
		expect(receivedTodos).toEqual(expected);
	});

	it("should return number of left todos", () => {
		const todos = {
			todos: testTodosArray,
		};
		const result = todosLeftSelector({ todos } as RootState);
		expect(result).toEqual(1);
	});

	it("should return filtered todos", () => {
		const state1 = {
			todos: { todos: testTodosArray },
			filter: {
				activeFilter: "completed",
			},
		};

		const state2 = {
			todos: { todos: testTodosArray },
			filter: {
				activeFilter: "all",
			},
		};

		const result1 = filteredTodosSelector(state1);
		const expected1 = [
			{
				id: "456",
				description: "second todo",
				completed: true,
			},
		];
		expect(result1).toEqual(expected1);

		const result2 = filteredTodosSelector(state2);
		expect(result2).toEqual(testTodosArray);
	});

	it("should return Todo by id", () => {
		const result = todoByIdSelector("123").resultFunc(testTodosArray);
		const expected2 = [
			{
				id: "123",
				description: "first todo",
				completed: false,
			},
		];
		expect(result).toEqual(expected2);
	});
});
