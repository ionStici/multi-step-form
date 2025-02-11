import styles from "@/styles/add-ons.module.scss";
import { assets } from "@/data/assets";

type AddOnsBoxProps = {
  active: boolean;
  name: string;
  about: string;
  price: string;
  billed: string;
  onClick: (name: string) => void;
};

export function AddOnsBox({ active, name, about, price, billed, onClick }: AddOnsBoxProps) {
  return (
    <button
      onClick={() => onClick(name)}
      className={`${styles.btn_box} ${active ? styles.active : ""}`}
    >
      <div className={`${styles.img_wrapper} ${active ? styles.active : ""}`}>
        {active && <img src={assets.iconCheckmark} alt="" width={20} height={20} />}
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
