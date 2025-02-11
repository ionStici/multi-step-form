import { useFormData } from "@/contexts/use-form-data";
import styles from "@/styles/view-data.module.scss";

export function Plan() {
  const { plan } = useFormData();

  return (
    <ul className={styles.plan_ul}>
      <li>
        <p>Plan: </p>
        <p>
          {plan.activePlan} ({plan.billed})
        </p>
      </li>
      <li>
        <p>Price: </p>
        <p>
          ${plan.price}/{plan.billed === "Monthly" ? "mo" : "yr"}
        </p>
      </li>
    </ul>
  );
}
