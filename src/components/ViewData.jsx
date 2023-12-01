import styles from "./../styles/ViewData.module.scss";

function ViewData({ goToStep1 }) {
  return (
    <section className={styles.section}>
      <p>Your Data</p>
      <button onClick={goToStep1}>goToStep1</button>
    </section>
  );
}

export default ViewData;
