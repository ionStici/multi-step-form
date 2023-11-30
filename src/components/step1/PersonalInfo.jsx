import styles from "./../../styles/PersonalInfo.module.scss";
import InputBox from "./InputBox";
import { useState, useRef } from "react";
import { useImperativeHandle, forwardRef } from "react";

const PersonalInfo = forwardRef((_, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const nameErr = useRef(null);
  const emailErr = useRef(null);
  const telErr = useRef(null);

  const emptyField = "This field is required";
  const wrongFormat = "Wrong format";

  function validate(clearStyles) {
    const { current: nameErrEl } = nameErr;
    const nameInput = nameErrEl.closest("div").querySelector("input");

    const { current: emailErrEl } = emailErr;
    const emailInput = emailErrEl.closest("div").querySelector("input");

    const { current: telErrEl } = telErr;
    const telInput = telErrEl.closest("div").querySelector("input");

    if (clearStyles) {
      nameErrEl.textContent = "";
      nameInput.classList.remove(styles.red_border);

      emailErrEl.textContent = "";
      emailInput.classList.remove(styles.red_border);

      telErrEl.textContent = "";
      telInput.classList.remove(styles.red_border);

      return;
    }

    if (!name) {
      nameErrEl.textContent = emptyField;
      nameInput.classList.add(styles.red_border);
    }

    if (!email) {
      emailErrEl.textContent = emptyField;
      emailInput.classList.add(styles.red_border);
    }

    if (!tel) {
      telErrEl.textContent = emptyField;
      telInput.classList.add(styles.red_border);
    }

    const reName = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const nameTest = reName.test(String(name).trim());

    const reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailTest = reEmail.test(String(email).toLowerCase());

    const reTel =
      /^\+?[0-9]{1,3}?[-. (]*([0-9]{1,5})[-. )]*([0-9]{1,5})[-. ]*([0-9]{1,6})$/;
    const telTest = reTel.test(String(tel));

    if (!nameTest && name) {
      nameErrEl.textContent = wrongFormat;
      nameInput.classList.add(styles.red_border);
    }

    if (!emailTest && email) {
      emailErrEl.textContent = wrongFormat;
      emailInput.classList.add(styles.red_border);
    }

    if (!telTest && tel) {
      telErrEl.textContent = wrongFormat;
      telInput.classList.add(styles.red_border);
    }

    if (nameTest && emailTest && telTest) return true;
  }

  useImperativeHandle(ref, () => ({ validate }));

  const handleClick = () => validate(true);

  return (
    <>
      <section className={styles.section}>
        <h1>Personal info</h1>
        <p className={styles.text}>
          Please provide your name, email address, and phone number.
        </p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <InputBox
            label="Name"
            type="name"
            err={nameErr}
            placeholder="e.g. Stephen King"
            setInput={setName}
            onClick={handleClick}
          />
          <InputBox
            label="Email Address"
            type="email"
            err={emailErr}
            placeholder="e.g. stephenking@lorem.com"
            setInput={setEmail}
            onClick={handleClick}
          />
          <InputBox
            label="Phone Number"
            type="tel"
            err={telErr}
            placeholder="e.g. +1 234 567 890"
            setInput={setTel}
            onClick={handleClick}
          />
        </form>
      </section>
    </>
  );
});

export default PersonalInfo;
