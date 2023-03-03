import cx from "classnames";

import { useAppDispatch, useAppSelector } from "hooks";

import { changeActiveFilter } from "store/filter/filterSlice";
import { selectActiveFilter } from "store/filter/filterSelector";

import { Button } from "components/Button";

import s from "./filterBlock.module.scss";

const FilterBlock = () => {
	const dispatch = useAppDispatch();

	const activeFilter = useAppSelector(selectActiveFilter);

	const handleChangeFilter = (filter: string) => {
		dispatch(changeActiveFilter(filter));
	};

	const btns = ["all", "active", "completed"];

	return (
		<div>
			{btns.map((btn) => (
				<Button
					key={btn}
					className={cx(s.btn, { [s.btnActive]: btn === activeFilter })}
					handleClick={() => handleChangeFilter(btn)}>
					{btn}
				</Button>
			))}
		</div>
	);
};

export { FilterBlock };
