import styles from "./../../styles/Plan.module.scss";

function Box({ icon, title, price, active, onClick }) {
  return (
    <button
      className={`${styles.btn_box} ${active ? styles.active : ""}`}
      data-plan={title}
      onClick={onClick}
    >
      <img src={icon} alt="" width={40} height={40} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </button>
  );
}

export default Box;
