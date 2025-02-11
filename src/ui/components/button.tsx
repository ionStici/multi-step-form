import styles from "@/styles/buttons.module.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
  classes: string;
};

export function Button({ text, onClick, classes }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${classes}`} onClick={onClick}>
      {text}
    </button>
  );
}
