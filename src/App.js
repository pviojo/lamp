import Lamp from './components/Lamp'
import styles from './index.module.css'
export default function App() {
  return (
    <div className={styles.cnt}>
      <Lamp
        color="#fff"
        intensity={10}
      >
    </div>
  );
}
