import styles from "./../../styles/Plan.module.scss";

function Toggle({ setMonthly }) {
  function handleToggle() {
    setMonthly((prev) => !prev);
  }

  return (
    <div className={styles.toggleWrapper}>
      <button onClick={handleToggle}>
        <p>Monthly</p>
        <div></div>
        <p>Yearly</p>
      </button>
    </div>
  );
}

export default Toggle;
