import { useState } from "react";

import PersonalInfo from "./components/step1/PersonalInfo";
import Steps from "./components/Steps";
import Buttons from "./components/Buttons";

import { assets } from "./store/Assets";

import { useRef } from "react";

function App() {
  const [step, setStep] = useState(1);

  const childRef = useRef(null);

  const callChildFunction = () => {
    childRef.current.validate();
  };

  function handleClick({ target }) {
    const { type } = target.dataset;

    if (type === "back") {
      setStep((prev) => (prev > 1 ? prev - 1 : prev));
      console.log("back");
    }

    if (type === "next") {
      //   setStep((prev) => (prev < 4 ? prev + 1 : prev));
      callChildFunction();
      console.log("next");
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
