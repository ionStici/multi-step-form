import styles from "./../../styles/AddOns.module.scss";
import Heading from "../Heading";
import Box from "./Box";
import { useContext, useEffect, useState } from "react";
import PlanContext from "../../store/PlanContext";
import AddonsContext from "../../store/AddonsContext";
import { useImperativeHandle, forwardRef } from "react";

const addons = [
  {
    name: "Online service",
    about: "Access to multiplayer games",
    monthly: "1",
    yearly: "10",
  },
  {
    name: "Larger storage",
    about: "Extra 1TB of cloud save",
    monthly: "2",
    yearly: "20",
  },
  {
    name: "Customizable profile",
    about: "Custom theme on your profile",
    monthly: "2",
    yearly: "20",
  },
];

const AddOns = forwardRef((props, ref) => {
  const { plan, _ } = useContext(PlanContext);
  const { billed } = plan;
  const [active, setActive] = useState([]);
  const { addOns, setAddons } = useContext(AddonsContext);

  useEffect(() => {
    if (addOns) {
      const activeAddOns = addons.map((addon, i) => {
        const test = addOns.find((an) => an.name === addon.name);
        return test ? true : false;
      });

      setActive(activeAddOns);
    } else {
      setActive([true, true, false]);
    }
  }, []);

  function handleActive({ target }) {
    const { name } = target.dataset;
    const inx = addons.findIndex((addon) => addon.name === name);

    setActive((prev) => {
      const newActive = [...prev];
      newActive[inx] = !newActive[inx];
      return newActive;
    });
  }

  const handleAddons = () => {
    const selectedAddons = addons.filter((addon, i) => active[i]);
    setAddons(selectedAddons);
  };

  useImperativeHandle(ref, () => ({ handleAddons }));

  return (
    <section className={styles.section}>
      <Heading
        h1="Pick add-ons"
        text="Add-ons help enhance your gaming experience."
      />

      {addons.map((addon, i) => {
        return (
          <Box
            key={i}
            active={active[i]}
            name={addon.name}
            about={addon.about}
            billed={billed}
            price={billed === "Monthly" ? addon.monthly : addon.yearly}
            onClick={handleActive}
          />
        );
      })}
    </section>
  );
});

export default AddOns;
