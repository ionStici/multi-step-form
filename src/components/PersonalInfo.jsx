import styles from "./../styles/PersonalInfo.module.scss";
import { useState } from "react";

function PersonalInfo() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [tel, setTel] = useState(null);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <section className={styles.section}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              onChange={({ target }) => setName(target.value)}
            />
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
      </section>
    </>
  );
}

export default PersonalInfo;
