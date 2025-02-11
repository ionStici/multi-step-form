import styles from "@/styles/plan.module.scss";
import { Dispatch, SetStateAction } from "react";

type ToggleProps = {
  monthly: boolean;
  setMonthly: Dispatch<SetStateAction<boolean>>;
};

export function Toggle({ monthly, setMonthly }: ToggleProps) {
  const handleToggle = () => setMonthly((p) => !p);

  return (
    <div className={styles.toggleWrapper}>
      <button onClick={handleToggle}>
        <p className={monthly ? styles.active : ""}>Monthly</p>
        <div>
          <div className={monthly ? "" : styles.active}></div>
        </div>
        <p className={monthly ? "" : styles.active}>Yearly</p>
      </button>
    </div>
  );
}
