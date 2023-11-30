import styles from "./../styles/Steps.module.scss";
import Step from "./Step";
import { assets } from "../store/Assets";
import { useState, useEffect } from "react";

function Steps({ step }) {
  const { bgSidebarDesktop: bgDesktop, bgSidebarMobile: bgMobile } = assets;

  const [match, setMatch] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const bgImg = { backgroundImage: `url(${match ? bgDesktop : bgMobile})` };

  const nums = [1, 2, 3, 4];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (e) => setMatch(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className={styles.wrapper} style={bgImg}>
      <ul>
        {nums.map((num) => (
          <Step key={num} step={step} num={num} match={match} />
        ))}
      </ul>
    </div>
  );
}

export default Steps;
