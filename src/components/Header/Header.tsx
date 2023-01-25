import styles from "./header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.mainTitle}>THINGS TO DO</h1>
		</header>
	);
};

export default Header;
