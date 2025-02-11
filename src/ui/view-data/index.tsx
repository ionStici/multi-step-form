import { useFormData } from "@/contexts/use-form-data";
import styles from "@/styles/view-data.module.scss";
import { Heading } from "../components/heading";
import { Info } from "./info";
import { Plan } from "./plan";
import { Addons } from "./addons";

export function ViewData() {
  const { info, addOns, plan } = useFormData();

  if (!info.name) {
    return (
      <section className={styles.section}>
        <Heading h1="Input cleared" text="Try again by clicking the button below 👋" />
      </section>
    );
  }

  return (
    <section className={styles.section}>
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
    </section>
  );
}
