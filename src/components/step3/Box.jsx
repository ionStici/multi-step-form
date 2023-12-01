import styles from "./../../styles/AddOns.module.scss";
import { assets } from "../../store/Assets";

function Box({ active, name, about, price, billed, onClick }) {
  return (
    <button
      className={`${styles.btn_box} ${active ? styles.active : ""}`}
      onClick={onClick}
      data-name={name}
    >
      <div className={`${styles.img_wrapper} ${active ? styles.active : ""}`}>
        {active && (
          <img src={assets.iconCheckmark} alt="" width={20} height={20} />
        )}
      </div>

      <div className={styles.text_wrapper}>
        <p>{name}</p>
        <p>{about}</p>
      </div>

      <p className={styles.price}>
        +${price}/{billed === "Monthly" ? "mo" : "yr"}
      </p>
    </button>
  );
}

export default Box;
