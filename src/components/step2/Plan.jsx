import Heading from "../Heading";
import styles from "./../../styles/Plan.module.scss";

function Plan() {
  return (
    <>
      <section className={styles.section}>
        <Heading
          h1="Select your plan"
          text="You have the option of monthly or yearly billing."
        />
      </section>
    </>
  );
}

export default Plan;
