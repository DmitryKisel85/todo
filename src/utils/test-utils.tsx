import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "@store/index";
import React from "react";

export function renderWithContext(element: React.ReactElement) {
	render(<Provider store={store}>{element}</Provider>);
}
