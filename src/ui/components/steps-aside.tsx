import styles from "@/styles/steps.module.scss";
import { assets } from "@/data/assets";
import { useEffect, useState } from "react";
import { useFormData } from "@/contexts/use-form-data";

export function StepsAside() {
  const { step } = useFormData();
  const [match, setMatch] = useState(window.matchMedia("(min-width: 768px)").matches);

  const { bgSidebarDesktop: bgDesktop, bgSidebarMobile: bgMobile } = assets;

  const bgImg = { backgroundImage: `url(${match ? bgDesktop : bgMobile})` };

  const numbers = [1, 2, 3, 4];
  const text = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (e: MediaQueryListEvent) => setMatch(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className={styles.wrapper} style={bgImg}>
      <ul>
        {numbers.map((num, i) => (
          <li key={i}>
            <p className={`${styles.num} ${step === num ? styles.active : ""}`}>{num}</p>
            {match && (
              <p>
                <span>Step {num}</span>
                <span>{text[i]}</span>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
