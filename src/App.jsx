import PersonalInfo from "./components/step1/PersonalInfo";
import Plan from "./components/step2/Plan";
import AddOns from "./components/step3/AddOns";
import Summary from "./components/step4/Summary";
import Steps from "./components/Steps";
import Buttons from "./components/Buttons";
import Message from "./components/Message";
import ViewData from "./components/ViewData";
import { useState, useRef } from "react";

function App() {
  const [step, setStep] = useState(1);

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const callValidate = () => {
    return step1Ref.current.validate(false);
  };

  const callSubmitData = () => {
    return step2Ref.current.submitData();
  };

  const callHandleAddons = () => {
    return step3Ref.current.handleAddons();
  };

  function handleSteps({ target }) {
    const { type } = target.dataset;

    if (type === "back") {
      step === 2 ? callSubmitData() : "";
      step === 3 ? callHandleAddons() : "";
      setStep((prev) => (prev > 1 ? prev - 1 : prev));
    }

    if (type === "next" && step === 1) {
      const isValid = callValidate();
      isValid ? setStep(2) : "";
    }

    if (type === "next" && step === 2) {
      const isValid = callSubmitData();
      isValid ? setStep(3) : "";
    }

    if (type === "next" && step === 3) {
      callHandleAddons();
      setStep(4);
    }

    if (type === "confirm" && step === 4) {
      setStep(5);
    }
  }

  function goToStep2() {
    setStep(2);
  }

  function goToStep6() {
    setStep(6);
  }

  function goToStep1() {
    setStep(1);
  }

  return (
    <>
      <Steps step={step} />
      {step === 1 && <PersonalInfo ref={step1Ref} />}
      {step === 2 && <Plan ref={step2Ref} />}
      {step === 3 && <AddOns ref={step3Ref} />}
      {step === 4 && <Summary goToStep2={goToStep2} />}
      {step === 5 && <Message goToStep6={goToStep6} />}
      {step === 6 && <ViewData goToStep1={goToStep1} />}
      {step < 5 && <Buttons step={step} onClick={handleSteps} />}
    </>
  );
}

export default App;
