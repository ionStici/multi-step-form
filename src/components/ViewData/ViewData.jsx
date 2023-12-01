import styles from "./../../styles/ViewData.module.scss";
import { useContext } from "react";
import InfoContext from "../../store/InfoContext";
import PlanContext from "../../store/PlanContext";
import AddonsContext from "../../store/AddonsContext";
import Heading from "../Heading";
import Info from "./Info";
import Plan from "./Plan";
import Addons from "./Addons";

function ViewData() {
  const { info, setInfo } = useContext(InfoContext);
  const { plan, setPlan } = useContext(PlanContext);
  const { addOns, setAddons } = useContext(AddonsContext);

  function clearData() {
    setInfo("");
    setPlan("");
    setAddons("");
  }

  if (!info) {
    return (
      <section className={styles.section}>
        <Heading
          h1="Input cleared"
          text="Try again by clicking the button below 👋"
        />
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <Heading h1="Your data" text="Check your input below." />

      <Info info={info} />
      <Plan plan={plan} />

      <ul>
        {addOns.map((addon, i) => {
          return <Addons key={i} addon={addon} plan={plan} />;
        })}
      </ul>

      <button onClick={clearData}>Clear Data</button>
    </section>
  );
}

export default ViewData;
