import styles from "./Display.module.css";

const Display = ({DisplayValue}) => {
  return <input type="text" className={styles.display} value={DisplayValue} readOnly></input>;
};

export default Display;
