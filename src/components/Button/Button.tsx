interface IButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	className: string;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, className }) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

export { Button };
