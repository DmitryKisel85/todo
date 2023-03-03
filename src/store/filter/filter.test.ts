import { RootState } from "@store/index";
import filterReducer, { initialState, changeActiveFilter } from "@store/filter/filterSlice";
import { selectActiveFilter } from "@store/filter/filterSelector";

describe("tests for filterSlice", () => {
	it("initialize slice with initialValue", () => {
		const filterSliceInit = filterReducer(initialState, { type: "unknown" });
		expect(filterSliceInit).toBe(initialState);
	});
});

describe("tests for filter reducer", () => {
	it("should change active filter", () => {
		const result1 = filterReducer(initialState, changeActiveFilter("active"));
		expect(result1).toEqual({ activeFilter: "active" });
		const result2 = filterReducer(initialState, changeActiveFilter("completed"));
		expect(result2).toEqual({ activeFilter: "completed" });
	});
});

describe("tests for filter selectors", () => {
	it("should return 'all' by default", () => {
		const filter = initialState;
		const result = selectActiveFilter({ filter } as RootState);
		expect(result).toEqual("all");
	});
	it("should return 'active' if 'active' filter is chosen", () => {
		const filter = { activeFilter: "active" };
		const result = selectActiveFilter({ filter } as RootState);
		expect(result).toEqual("active");
	});
});
