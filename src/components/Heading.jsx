import styles from "./../styles/Heading.module.scss";

function Heading({ h1, text }) {
  return (
    <>
      <h1 className={styles.h1}>{h1}</h1>
      <p className={styles.text}>{text}</p>
    </>
  );
}

export default Heading;
