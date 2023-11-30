import styles from "./../styles/Buttons.module.scss";
import Button from "./Button";

function Buttons({ step, onClick }) {
  return (
    <div className={styles.wrapper}>
      <div>
        {step > 1 && (
          <Button
            text="Go Back"
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
      </div>
    </div>
  );
}

export default Buttons;
