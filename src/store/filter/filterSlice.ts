import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterState = {
	activeFilter: string;
};

export const initialState: FilterState = {
	activeFilter: "all",
};

const filterSlice = createSlice({
	name: "filterReducer",
	initialState,
	reducers: {
		changeActiveFilter(state, action: PayloadAction<string>) {
			state.activeFilter = action.payload;
		},
	},
});

const { actions, reducer } = filterSlice;

export default reducer;
export const { changeActiveFilter } = actions;
