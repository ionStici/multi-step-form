import { useFormData } from "@/contexts/use-form-data";
import styles from "@/styles/view-data.module.scss";

export function Info() {
  const { info } = useFormData();

  return (
    <ul className={styles.info_ul}>
      <li>
        <p>Name: </p>
        <p>{info.name}</p>
      </li>
      <li>
        <p>Email: </p>
        <p>{info.email}</p>
      </li>
      <li>
        <p>Tel: </p>
        <p>{info.tel}</p>
      </li>
    </ul>
  );
}
