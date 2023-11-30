import { useState, useRef } from "react";

import PersonalInfo from "./components/step1/PersonalInfo";
import Steps from "./components/Steps";
import Buttons from "./components/Buttons";

import { assets } from "./store/Assets";

function App() {
  const [step, setStep] = useState(1);

  const childRef = useRef(null);

  const callValidate = () => {
    return childRef.current.validate(false);
  };

  function handleClick({ target }) {
    const { type } = target.dataset;

    if (type === "back") {
      setStep((prev) => (prev > 1 ? prev - 1 : prev));
      console.log("back");
    }

    if (type === "next") {
      if (step === 1) {
        const isValid = callValidate();

        if (isValid) {
          setTimeout(() => {
            setStep((prev) => (prev < 4 ? prev + 1 : prev));
          }, 1000);
        }
      }
    }

    if (type === "confirm") {
      console.log("confirm");
    }
  }

  return (
    <>
      <Steps step={step} />
      {step === 1 && <PersonalInfo ref={childRef} />}
      {step === 2 && "2"}
      {step === 3 && "3"}
      {step === 4 && "4"}
      <Buttons step={step} onClick={handleClick} />
    </>
  );
}

export default App;
