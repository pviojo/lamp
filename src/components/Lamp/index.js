import styles from "./index.module.css";

const Lamp = ({ color, intensity }) => {
  return (
    <div className={styles.lamp}>
      <div
        className={styles.inner}
        style={{
          backgroundColor: color,
          opacity: intensity / 100
        }}
      ></div>
    </div>
  );
};

export default Lamp;
