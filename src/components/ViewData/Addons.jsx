function Addons({ addon, plan }) {
  return (
    <li>
      <p>{addon.name}</p>
      <p>
        {plan.billed === "Monthly"
          ? `+$${addon.monthly}/mo`
          : `+$${addon.yearly}/yr`}
      </p>
    </li>
  );
}

export default Addons;
