import styles from "./../../styles/Plan.module.scss";

function Toggle({ monthly, setMonthly }) {
  const handleToggle = () => setMonthly((prev) => !prev);

  return (
    <div className={styles.toggleWrapper}>
      <button onClick={handleToggle}>
        <p className={monthly ? styles.active : ""}>Monthly</p>
        <div>
          <div className={monthly ? "" : styles.active}></div>
        </div>
        <p className={monthly ? "" : styles.active}>Yearly</p>
      </button>
    </div>
  );
}

export default Toggle;
