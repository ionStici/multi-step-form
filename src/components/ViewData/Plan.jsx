function Plan({ plan }) {
  return (
    <ul>
      <li>
        <p>Plan: </p>
        <p>
          {plan.activePlan} ({plan.billed})
        </p>
      </li>
      <li>
        <p>Plan price: </p>
        <p>
          ${plan.price}/{plan.billed === "Monthly" ? "mo" : "yr"}
        </p>
      </li>
    </ul>
  );
}

export default Plan;
