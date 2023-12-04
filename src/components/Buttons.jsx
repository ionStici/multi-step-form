import styles from "./../styles/Buttons.module.scss";
import Button from "./Button";

function Buttons({ step, isInfo, onClick }) {
  return (
    <div className={styles.wrapper}>
      <div>
        {step > 1 && step < 5 && (
          <Button
            text="Go Back"
            onClick={onClick}
            type="back"
            classes={styles.back}
          />
        )}
        {step === 6 && (
          <Button
            text="Step 1"
            onClick={onClick}
            type="back"
            classes={styles.back}
          />
        )}
        {step < 4 && (
          <Button
            text="Next Step"
            onClick={onClick}
            type="next"
            classes={styles.next}
          />
        )}
        {step === 4 && (
          <Button
            text="Confirm"
            onClick={onClick}
            type="confirm"
            classes={styles.confirm}
          />
        )}
        {step === 5 && (
          <Button
            text="See Data"
            onClick={onClick}
            type="confirm"
            classes={styles.confirm}
          />
        )}
        {step === 6 && isInfo && (
          <Button
            text="Clear Data"
            onClick={onClick}
            type="confirm"
            classes={styles.confirm}
          />
        )}
      </div>
    </div>
  );
}

export default Buttons;
