import styles from "./../styles/Buttons.module.scss";

function Buttons({ step, onClick }) {
  return (
    <div className={styles.wrapper}>
      <div>
        {step > 1 && (
          <button
            className={`${styles.btn} ${styles.back}`}
            data-type="back"
            onClick={onClick}
          >
            Go Back
          </button>
        )}
        {step < 4 && (
          <button
            className={`${styles.btn} ${styles.next}`}
            data-type="next"
            onClick={onClick}
          >
            Next Step
          </button>
        )}
        {step === 4 && (
          <button
            className={`${styles.btn} ${styles.confirm}`}
            data-type="confirm"
            onClick={onClick}
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
}

export default Buttons;
