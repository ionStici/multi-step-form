import { useFormData } from "@/contexts/use-form-data";
import styles from "@/styles/personal-info.module.scss";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Heading } from "../components/heading";
import { Input } from "./input";
import { Animate } from "../components/animate";

const emptyField = "This field is required";
const wrongFormat = "Wrong format";

export const PersonalInfo = forwardRef((_, ref) => {
  const { info, setInfo } = useFormData();
  const { name, email, tel } = info;

  const setName = (input: string) => setInfo({ ...info, name: input });
  const setEmail = (input: string) => setInfo({ ...info, email: input });
  const setTel = (input: string) => setInfo({ ...info, tel: input });

  const nameErr = useRef<HTMLParagraphElement>(null);
  const emailErr = useRef<HTMLParagraphElement>(null);
  const telErr = useRef<HTMLParagraphElement>(null);

  function validate(clearStyles: boolean) {
    const { current: nameErrEl } = nameErr;
    const { current: emailErrEl } = emailErr;
    const { current: telErrEl } = telErr;

    if (!nameErrEl || !emailErrEl || !telErrEl) return;

    const nameInput = nameErrEl.closest("div")!.querySelector("input");
    const emailInput = emailErrEl.closest("div")!.querySelector("input");
    const telInput = telErrEl.closest("div")!.querySelector("input");

    if (clearStyles) {
      nameErrEl.textContent = "";
      nameInput!.classList.remove(styles.red_border);

      emailErrEl.textContent = "";
      emailInput!.classList.remove(styles.red_border);

      telErrEl.textContent = "";
      telInput!.classList.remove(styles.red_border);

      return;
    }

    if (!name) {
      nameErrEl.textContent = emptyField;
      nameInput!.classList.add(styles.red_border);
    }

    if (!email) {
      emailErrEl.textContent = emptyField;
      emailInput!.classList.add(styles.red_border);
    }

    if (!tel) {
      telErrEl.textContent = emptyField;
      telInput!.classList.add(styles.red_border);
    }

    const reName = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const nameTest = reName.test(String(name).trim());

    const reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailTest = reEmail.test(String(email).toLowerCase());

    const reTel = /^\+?[0-9]{1,3}?[-. (]*([0-9]{1,5})[-. )]*([0-9]{1,5})[-. ]*([0-9]{1,6})$/;
    const telTest = reTel.test(String(tel));

    if (!nameTest && name) {
      nameErrEl.textContent = wrongFormat;
      nameInput!.classList.add(styles.red_border);
    }

    if (!emailTest && email) {
      emailErrEl.textContent = wrongFormat;
      emailInput!.classList.add(styles.red_border);
    }

    if (!telTest && tel) {
      telErrEl.textContent = wrongFormat;
      telInput!.classList.add(styles.red_border);
    }

    if (nameTest && emailTest && telTest) {
      setInfo({ name, email, tel });
      return true;
    }
  }

  useImperativeHandle(ref, () => ({ validate }));

  const handleClick = () => validate(true);

  return (
    <section className={styles.section}>
      <Animate>
        <Heading
          h1="Personal info"
          text="Please provide your name, email address, and phone number."
        />
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <Input
            label="Name"
            placeholder="e.g. Stephen King"
            type="text"
            input={name}
            setInput={setName}
            err={nameErr}
            onClick={handleClick}
          />
          <Input
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            input={email}
            setInput={setEmail}
            err={emailErr}
            onClick={handleClick}
          />
          <Input
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            type="tel"
            input={tel}
            setInput={setTel}
            err={telErr}
            onClick={handleClick}
          />
        </form>
      </Animate>
    </section>
  );
});
