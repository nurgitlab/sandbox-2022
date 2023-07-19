import { Header } from "./components/Header/Header";
import styles from "./App.module.scss"
import {Viewer} from "./components/Viewer/Viewer";

function App() {
  return (
    <div className={styles.App}>
        <Header/>
        <Viewer/>
    </div>
  );
}

export default App;
