import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "hooks";

import { activeFilterChanged } from "store/filter/filterSlice";

import { selectActiveFilter } from "store/filter/filterSelector";

import Button from "components/Button";
import styles from "./filterBlock.module.scss";

const FilterBlock: React.FC = () => {
	const dispatch = useAppDispatch();

	const activeFilter = useAppSelector(selectActiveFilter);

	// смена активного фильтра в зависимости от нажатой кнопки
	const handleChangeFilter = (filter: string) => {
		dispatch(activeFilterChanged(filter));
	};

	return (
		<div>
			<Button
				className={classNames(styles.btnFilter, { [styles.btnFilterActive]: activeFilter === "all" })}
				onClick={() => handleChangeFilter("all")}>
				All
			</Button>
			<Button
				className={classNames(styles.btnFilter, { [styles.btnFilterActive]: activeFilter === "active" })}
				onClick={() => handleChangeFilter("active")}>
				Active
			</Button>
			<Button
				className={classNames(styles.btnFilter, { [styles.btnFilterActive]: activeFilter === "completed" })}
				onClick={() => handleChangeFilter("completed")}>
				Completed
			</Button>
		</div>
	);
};

export default FilterBlock;
