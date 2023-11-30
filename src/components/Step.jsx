import styles from "./../styles/Steps.module.scss";

function Step({ step, num, match }) {
  return (
    <li>
      <p className={`${styles.num} ${step === num ? styles.active : ""}`}>
        {num}
      </p>
      {match && (
        <p>
          <span>Step {num}</span>
          <span>Your Info</span>
        </p>
      )}
    </li>
  );
}

export default Step;
