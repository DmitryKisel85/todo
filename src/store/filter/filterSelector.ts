import { RootState } from "..";

export const selectActiveFilter = (state: RootState) => state.filter.activeFilter;
