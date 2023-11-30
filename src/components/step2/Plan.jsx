import styles from "./../../styles/Plan.module.scss";
import { assets } from "../../store/Assets";
import { useState, useContext, useEffect } from "react";
import Heading from "../Heading";
import Box from "./Box";
import Toggle from "./Toggle";
import PlanContext from "../../store/PlanContext";
import { useImperativeHandle, forwardRef } from "react";

const { iconArcade, iconAdvanced, iconPro } = assets;

const plans = [
  {
    name: "Arcade",
    monthly: "9",
    yearly: "90",
    icon: iconArcade,
  },
  {
    name: "Advanced",
    monthly: "12",
    yearly: "120",
    icon: iconAdvanced,
  },
  {
    name: "Pro",
    monthly: "15",
    yearly: "150",
    icon: iconPro,
  },
];

const Plan = forwardRef((_, ref) => {
  const [monthly, setMonthly] = useState(null);
  const [activePlan, setActivePlan] = useState(null);

  const { plan, setPlan } = useContext(PlanContext);
  const { activePlan: selectedPlan, billed } = plan;

  useEffect(() => {
    if (billed) billed === "Monthly" ? setMonthly(true) : setMonthly(false);
    if (selectedPlan) setActivePlan(selectedPlan);

    if (!billed) setMonthly(true);
    if (!selectedPlan) setActivePlan("Arcade");
  }, []);

  function handleActive({ target }) {
    const { plan } = target.dataset;
    setActivePlan(plan);
  }

  function submitData() {
    const plan = plans.find((plan) => plan.name === activePlan);

    const billed = monthly ? "Monthly" : "Yearly";
    const price = monthly ? plan.monthly : plan.yearly;

    setPlan({ activePlan, billed, price });
    return true;
  }

  useImperativeHandle(ref, () => ({ submitData }));

  return (
    <>
      <section className={styles.section}>
        <Heading
          h1="Select your plan"
          text="You have the option of monthly or yearly billing."
        />

        <div className={styles.box_wrapper}>
          {plans.map((plan, i) => {
            return (
              <Box
                key={i}
                icon={plan.icon}
                title={plan.name}
                price={monthly ? `$${plan.monthly}/mo` : `$${plan.yearly}/yr`}
                active={plan.name === activePlan ? true : false}
                onClick={handleActive}
              />
            );
          })}
        </div>

        <Toggle monthly={monthly} setMonthly={setMonthly} />
      </section>
    </>
  );
});

export default Plan;
