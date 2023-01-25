import { screen } from "@testing-library/react";
import { renderWithContext } from "@utils/test-utils";
import App from "./App";

it("renders the correct initial DOM", () => {
	renderWithContext(<App />);

	const inputElement: HTMLInputElement = screen.getByPlaceholderText(/What are we going to do/i);
	const todoCountElement = screen.getByText(/Things left to do/i);
	const todoItems = screen.queryAllByRole("listitem");

	expect(todoCountElement).toHaveTextContent("0");
	expect(inputElement.value).toBe("");
	expect(todoItems.length).toBe(0);
});
