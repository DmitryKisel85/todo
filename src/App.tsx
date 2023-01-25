import styles from "./App.module.scss";

import Header from "@components/Header";
import MainBlock from "@components/MainBlock";

const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			<MainBlock />
		</div>
	);
};

export default App;
