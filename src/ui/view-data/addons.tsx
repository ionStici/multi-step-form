type AddonsProps = {
  addon: { name: string; monthly: string; yearly: string };
  plan: { billed: string };
};

export function Addons({ addon, plan }: AddonsProps) {
  return (
    <li>
      <p>{addon.name}</p>
      <p>{plan.billed === "Monthly" ? `+$${addon.monthly}/mo` : `+$${addon.yearly}/yr`}</p>
    </li>
  );
}
