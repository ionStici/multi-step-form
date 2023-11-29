import styles from "./../styles/Buttons.module.scss";

function Buttons({ step }) {
  return (
    <div className={styles.wrapper}>
      {step > 1 && <button className={styles.back}>Go Back</button>}
      {step < 4 && <button className={styles.next}>Next Step</button>}
      {step === 4 && <button className={styles.confirm}>Confirm</button>}
    </div>
  );
}

export default Buttons;
