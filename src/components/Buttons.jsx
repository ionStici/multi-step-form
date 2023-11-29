import styles from "./../styles/Buttons.module.scss";

function Buttons({ step }) {
  return (
    <div className={styles.wrapper}>
      <div>
        {step > 1 && (
          <button className={`${styles.btn} ${styles.back}`}>Go Back</button>
        )}
        {step < 4 && (
          <button className={`${styles.btn} ${styles.next}`}>Next Step</button>
        )}
        {step === 4 && (
          <button className={`${styles.btn} ${styles.confirm}`}>Confirm</button>
        )}
      </div>
    </div>
  );
}

export default Buttons;
