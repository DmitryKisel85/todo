import cx from "classnames";

import s from "./button.module.scss";

interface IButtonProps {
	children: React.ReactNode;
	handleClick: () => void;
	className: string;
}

const Button = ({ children, handleClick, className }: IButtonProps) => {
	return (
		<button onClick={handleClick} className={cx(s.btn, className)}>
			{children}
		</button>
	);
};

export { Button };
