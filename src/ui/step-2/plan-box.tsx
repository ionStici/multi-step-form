import styles from "@/styles/plan.module.scss";

type PlanBoxProps = {
  icon: string;
  title: string;
  price: string;
  active: boolean;
  onClick: () => void;
};

export function PlanBox({ icon, title, price, active, onClick }: PlanBoxProps) {
  return (
    <button className={`${styles.btn_box} ${active ? styles.active : ""}`} onClick={onClick}>
      <img src={icon} alt="" width={40} height={40} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </button>
  );
}
