import { useFormData } from "@/contexts/use-form-data";
import styles from "@/styles/buttons.module.scss";
import { Button } from "./button";

export function Buttons({ onClick }: { onClick: (type: string) => void }) {
  const { step, info } = useFormData();
  const isInfo = Boolean(info.name || info.email || info.tel);

  return (
    <div className={styles.wrapper}>
      <div>
        {step > 1 && step < 5 && (
          <Button text="Go Back" onClick={() => onClick("back")} classes={styles.back} />
        )}
        {step === 6 && (
          <Button text="Step 1" onClick={() => onClick("back")} classes={styles.back} />
        )}
        {step < 4 && (
          <Button text="Next Step" onClick={() => onClick("next")} classes={styles.next} />
        )}
        {step === 4 && (
          <Button text="Confirm" onClick={() => onClick("confirm")} classes={styles.confirm} />
        )}
        {step === 5 && (
          <Button text="See Data" onClick={() => onClick("confirm")} classes={styles.confirm} />
        )}
        {step === 6 && isInfo && (
          <Button text="Clear Data" onClick={() => onClick("confirm")} classes={styles.confirm} />
        )}
      </div>
    </div>
  );
}
