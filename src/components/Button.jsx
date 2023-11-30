import styles from "./../styles/Buttons.module.scss";

function Button({ text, onClick, type, classes }) {
  return (
    <button
      className={`${styles.btn} ${classes}`}
      data-type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
