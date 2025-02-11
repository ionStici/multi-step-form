import styles from "@/styles/personal-info.module.scss";
import { RefObject } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  input: string;
  setInput: (input: string) => void;
  type: string;
  onClick: () => void;
  err: RefObject<HTMLParagraphElement | null>;
};

export function Input({ label, placeholder, input, setInput, type, err, onClick }: InputProps) {
  return (
    <div>
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
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
