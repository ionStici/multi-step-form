import PersonalInfo from "./components/step1/PersonalInfo";
import Steps from "./components/Steps";
import Buttons from "./components/Buttons";
import { useState, useRef } from "react";

function App() {
  const [step, setStep] = useState(1);

  const step1Ref = useRef(null);

  const callValidate = () => {
    return step1Ref.current.validate(false);
  };

  function handleSteps({ target }) {
    const { type } = target.dataset;

    if (type === "back") {
      setStep((prev) => (prev > 1 ? prev - 1 : prev));
      console.log("back");
    }

    if (type === "next") {
      if (step === 1) {
        const isValid = callValidate();
        if (isValid) setStep((prev) => (prev < 4 ? prev + 1 : prev));
      }
    }

    if (type === "confirm") {
      console.log("confirm");
    }
  }

  return (
    <>
      <Steps step={step} />
      {step === 1 && <PersonalInfo ref={step1Ref} />}
      {step === 2 && ""}
      {step === 3 && ""}
      {step === 4 && ""}
      <Buttons step={step} onClick={handleSteps} />
    </>
  );
}

export default App;
