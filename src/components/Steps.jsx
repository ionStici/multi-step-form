import styles from "./../styles/Steps.module.scss";
import { assets } from "../store/Assets";

function Steps({ step }) {
  //   console.log(assets.bgSidebarMobile);
  //   console.log(assets.bgSidebarDesktop);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${assets.bgSidebarMobile})` }}
    >
      <ul>
        <li className={step === 1 ? styles.active : ""}>1</li>
        <li className={step === 2 ? styles.active : ""}>2</li>
        <li className={step === 3 ? styles.active : ""}>3</li>
        <li className={step === 4 ? styles.active : ""}>4</li>
      </ul>
    </div>
  );
}

export default Steps;
