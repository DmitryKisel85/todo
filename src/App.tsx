import { Header } from "components/Header";
import { MainBlock } from "components/MainBlock";

import styles from "./App.module.scss";

const App = () => {
	return (
		<div className={styles.root}>
			<Header />
			<MainBlock />
		</div>
	);
};

export { App };
