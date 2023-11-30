import styles from "./../../styles/PersonalInfo.module.scss";

function InputBox({ label, type, err, placeholder, setInput, onClick }) {
  return (
    <div>
      <label htmlFor={type}>{label}</label>
      <input
        type={type === "name" ? "text" : type}
        id={type}
        placeholder={placeholder}
        onChange={({ target }) => setInput(target.value)}
        onClick={onClick}
      />
      <p className={styles.message} ref={err}></p>
    </div>
  );
}

export default InputBox;
