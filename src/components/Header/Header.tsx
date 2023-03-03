import s from "./header.module.scss";

const Header = () => {
	return (
		<header className={s.root}>
			<h1 className={s.title}>THINGS TO DO</h1>
		</header>
	);
};

export { Header };
