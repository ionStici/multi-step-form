import styles from "@/styles/plan.module.scss";
import { assets } from "@/data/assets";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Heading } from "../components/heading";
import { useFormData } from "@/contexts/use-form-data";
import { Toggle } from "./toggle";
import { PlanBox } from "./plan-box";

export const Plan = forwardRef((_, ref) => {
  const { plan, setPlan } = useFormData();
  const { activePlan: selectedPlan, billed } = plan;

  const [monthly, setMonthly] = useState(() => {
    return !billed || billed === "Monthly" ? true : false;
  });

  const [activePlan, setActivePlan] = useState(() => {
    return selectedPlan ? selectedPlan : "Arcade";
  });

  const handleActive = (plan: string) => setActivePlan(plan);

  function submitData() {
    const plan = plans.find((plan) => plan.name === activePlan);
    const billed = monthly ? "Monthly" : "Yearly";
    const price = monthly ? plan!.monthly : plan!.yearly;
    setPlan({ activePlan, billed, price });
    return true;
  }

  useImperativeHandle(ref, () => ({ submitData }));

  return (
    <section className={styles.section}>
      <Heading h1="Select your plan" text="You have the option of monthly or yearly billing." />
      <div className={styles.box_wrapper}>
        {plans.map((plan, i) => {
          return (
            <PlanBox
              key={i}
              icon={plan.icon}
              title={plan.name}
              price={monthly ? `$${plan.monthly}/mo` : `$${plan.yearly}/yr`}
              active={plan.name === activePlan ? true : false}
              onClick={() => handleActive(plan.name)}
            />
          );
        })}
      </div>
      <Toggle monthly={monthly} setMonthly={setMonthly} />
    </section>
  );
});

const { iconArcade, iconAdvanced, iconPro } = assets;

const plans = [
  { name: "Arcade", monthly: "9", yearly: "90", icon: iconArcade },
  { name: "Advanced", monthly: "12", yearly: "120", icon: iconAdvanced },
  { name: "Pro", monthly: "15", yearly: "150", icon: iconPro },
];
