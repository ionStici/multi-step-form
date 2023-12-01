import styles from "./../../styles/Summary.module.scss";
import Heading from "../Heading";

function Summary() {
  return (
    <section className={styles.section}>
      <Heading
        h1="Finishing up"
        text="Double-check everything looks OK before confirming."
      />
    </section>
  );
}

export default Summary;
