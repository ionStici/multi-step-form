import styles from "./../../styles/ViewData.module.scss";

function Plan({ plan }) {
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

export default Plan;
