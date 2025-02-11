import styles from "@/styles/message.module.scss";
import { assets } from "@/data/assets";
import { useFormData } from "@/contexts/use-form-data";
import { Animate } from "./animate";

export function Message() {
  const { setStep } = useFormData();
  const goToStep6 = () => setStep(6);

  return (
    <section className={styles.section}>
      <Animate>
        <img src={assets.iconThankYou} alt="" width={56} height={56} onClick={goToStep6} />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </Animate>
    </section>
  );
}
