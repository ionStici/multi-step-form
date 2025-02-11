import styles from "@/styles/summary.module.scss";
import { useFormData } from "@/contexts/use-form-data";
import { Heading } from "../components/heading";

export function Summary() {
  const { setStep, addOns, plan } = useFormData();
  const goToStep2 = () => setStep(2);
  const { activePlan, billed, price } = plan;

  const sum: number = addOns.reduce((acc, addOn) => {
    if (billed === "Monthly") acc += Number(addOn.monthly);
    if (billed === "Yearly") acc += Number(addOn.yearly);
    return acc;
  }, Number(price));

  return (
    <section className={styles.section}>
      <Heading h1="Finishing up" text="Double-check everything looks OK before confirming." />

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
