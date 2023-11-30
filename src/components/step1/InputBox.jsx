import styles from "./../../styles/PersonalInfo.module.scss";

function InputBox({ label, type, err, placeholder, input, setInput, onClick }) {
  return (
    <div>
      <label htmlFor={type}>{label}</label>
      <input
        type={type === "name" ? "text" : type}
        id={type}
        placeholder={placeholder}
        value={input}
        onChange={({ target }) => setInput(target.value)}
        onClick={onClick}
      />
      <p className={styles.message} ref={err}></p>
    </div>
  );
}

export default InputBox;
