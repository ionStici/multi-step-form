import { useFormData } from "@/contexts/use-form-data";
import styles from "@/styles/view-data.module.scss";
import { Heading } from "../components/heading";
import { Info } from "./info";
import { Plan } from "./plan";
import { Addons } from "./addons";
import { Animate } from "../components/animate";

export function ViewData() {
  const { info, addOns, plan } = useFormData();

  if (!info.name) {
    return (
      <section className={styles.section}>
        <Animate>
          <Heading h1="Input cleared" text="Try again by clicking the button below 👋" />
        </Animate>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <Animate>
        <Heading h1="Your data" text="Check your input below." />

        <div className={styles.wrapper}>
          <Info />
          <Plan />
        </div>

        {addOns && (
          <ul className={styles.addons_ul}>
            {addOns.map((addon, i) => {
              return <Addons key={i} addon={addon} plan={plan} />;
            })}
          </ul>
        )}
      </Animate>
    </section>
  );
}
