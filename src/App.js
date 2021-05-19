import Lamp from "./components/Lamp";
import styles from "./index.module.css";
const App = () => {
  return (
    <div className={styles.cnt}>
      <Lamp color="#fff" intensity={50} />
      <ColorSelector />
    </div>
  );
};

export default App;
