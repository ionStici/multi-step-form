import styles from "./../styles/Steps.module.scss";

function Step({ step, num, text, match }) {
  return (
    <li>
      <p className={`${styles.num} ${step === num ? styles.active : ""}`}>
        {num}
      </p>
      {match && (
        <p>
          <span>Step {num}</span>
          <span>{text}</span>
        </p>
      )}
    </li>
  );
}

export default Step;
