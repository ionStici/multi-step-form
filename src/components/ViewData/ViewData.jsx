import btnStyles from "./../../styles/Buttons.module.scss";
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
  const { info, _ } = useContext(InfoContext);
  const { plan, __ } = useContext(PlanContext);
  const { addOns, ___ } = useContext(AddonsContext);

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

      <div className={styles.wrapper}>
        <Info info={info} />
        <Plan plan={plan} />
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

export default ViewData;
