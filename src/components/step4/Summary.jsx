import styles from "./../../styles/Summary.module.scss";
import Heading from "../Heading";

import { useContext } from "react";
import AddonsContext from "../../store/AddonsContext";
import PlanContext from "../../store/PlanContext";

function Summary({ goToStep2 }) {
  const { addOns, _ } = useContext(AddonsContext);
  const { plan, __ } = useContext(PlanContext);

  const { activePlan, billed, price } = plan;

  const sum = addOns.reduce((acc, addOn) => {
    if (billed === "Monthly") return +acc + +addOn.monthly;
    if (billed === "Yearly") return +acc + +addOn.yearly;
  }, price);

  return (
    <section className={styles.section}>
      <Heading
        h1="Finishing up"
        text="Double-check everything looks OK before confirming."
      />

      <div className={styles.summary_wrapper}>
        <div className={styles.plan_wrapper}>
          <div>
            <h2>
              {activePlan} ({billed})
            </h2>
            <button onClick={goToStep2}>Change</button>
          </div>
          <p>
            ${price}/${billed === "Monthly" ? "mo" : "yr"}
          </p>
        </div>

        <div className={styles.addons_wrapper}>
          {addOns.map((addOn, i) => {
            return (
              <div key={i}>
                <p>{addOn.name}</p>
                <p>
                  +${billed === "Monthly" ? addOn.monthly : addOn.yearly}/
                  {billed === "Monthly" ? "mo" : "yr"}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.total_wrapper}>
        <p>Total (per {billed === "Monthly" ? "month" : "year"})</p>
        <p>
          ${sum}/{billed === "Monthly" ? "mo" : "yr"}
        </p>
      </div>
    </section>
  );
}

export default Summary;
