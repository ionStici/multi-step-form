import styles from "@/styles/add-ons.module.scss";
import { addons } from "@/data/data";
import { Heading } from "../components/heading";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useFormData } from "@/contexts/use-form-data";
import { AddOnsBox } from "./add-ons-box";
import { Animate } from "../components/animate";

export const AddOns = forwardRef((_, ref) => {
  const { plan, addOns, setAddons } = useFormData();
  const { billed } = plan;

  const [active, setActive] = useState<boolean[]>(() => {
    if (addOns.length > 0) {
      return addons.map((addon) => (addOns.find((ao) => ao.name === addon.name) ? true : false));
    }
    return [true, true, false];
  });

  const handleActive = (name: string) => {
    const inx = addons.findIndex((addon) => addon.name === name);

    setActive((prev) => {
      const newActive = [...prev];
      newActive[inx] = !newActive[inx];
      return newActive;
    });
  };

  const handleAddons = () => setAddons(addons.filter((_, i) => active[i]));

  useImperativeHandle(ref, () => ({ handleAddons }));

  return (
    <section className={styles.section}>
      <Animate>
        <Heading h1="Pick add-ons" text="Add-ons help enhance your gaming experience." />

        {addons.map(({ name, about, monthly, yearly }, i) => {
          return (
            <AddOnsBox
              key={i}
              active={active[i]}
              name={name}
              about={about}
              billed={billed}
              price={billed === "Monthly" ? monthly : yearly}
              onClick={handleActive}
            />
          );
        })}
      </Animate>
    </section>
  );
});
