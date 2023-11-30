import styles from "./../../styles/PersonalInfo.module.scss";
import { useState, useRef } from "react";
import InputBox from "./InputBox";

function PersonalInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const nameErr = useRef(null);
  const emailErr = useRef(null);
  const telErr = useRef(null);

  const emptyField = "This field is required";
  const wrongFormat = "Wrong format";

  function handleValidation() {
    return;
  }

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
          />
          <InputBox
            label="Email Address"
            type="email"
            err={emailErr}
            placeholder="e.g. stephenking@lorem.com"
            setInput={setEmail}
          />
          <InputBox
            label="Phone Number"
            type="tel"
            err={telErr}
            placeholder="e.g. +1 234 567 890"
            setInput={setTel}
          />
        </form>
      </section>
    </>
  );
}

export default PersonalInfo;
