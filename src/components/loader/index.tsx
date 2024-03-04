import styles from "../../styles/loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      Loading..
      <span></span>
    </div>
  );
};

export default Loader;
