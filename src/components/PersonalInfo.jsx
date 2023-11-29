import styles from "./../styles/PersonalInfo.module.scss";
import { useState, useRef } from "react";

function PersonalInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const nameErr = useRef(null);

  const emptyField = "This field is required";
  const wrongFormat = "Wrong format";

  const handleSubmit = (e) => e.preventDefault();

  function validateName() {
    const { current: err } = nameErr;

    const input = err.closest("div").querySelector("input");

    if (!name) {
      err.textContent = emptyField;
      input.classList.add(styles.error);
      return;
    }

    const re = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const test = re.test(String(name).trim());

    if (!test) {
      err.textContent = wrongFormat;
      input.classList.add(styles.error);
    }
  }

  function validateEmail(email) {
    return;
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }

  function validateTel(tel) {
    return;
    const re =
      /^\+?[0-9]{1,3}?[-. (]*([0-9]{1,5})[-. )]*([0-9]{1,5})[-. ]*([0-9]{1,6})$/;
    return re.test(String(tel));
  }

  return (
    <>
      <section className={styles.section}>
        <h1>Personal info</h1>
        <p className={styles.text}>
          Please provide your name, email address, and phone number.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              onChange={({ target }) => setName(target.value)}
            />
            <p className={styles.message} ref={nameErr}></p>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div>
            <label htmlFor="tel">Phone Number</label>
            <input
              type="tel"
              id="tel"
              placeholder="e.g. +1 234 567 890"
              onChange={({ target }) => setTel(target.value)}
            />
          </div>
        </form>
        <button onClick={validateName}>Click</button>
      </section>
    </>
  );
}

export default PersonalInfo;
