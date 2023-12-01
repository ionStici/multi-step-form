import PersonalInfo from "./components/step1/PersonalInfo";
import Plan from "./components/step2/Plan";
import AddOns from "./components/step3/AddOns";
import Summary from "./components/step4/Summary";
import Steps from "./components/Steps";
import Buttons from "./components/Buttons";
import Message from "./components/Message";
import ViewData from "./components/ViewData/ViewData";
import { useState, useRef, useContext } from "react";
import InfoContext from "./store/InfoContext";
import PlanContext from "./store/PlanContext";
import AddonsContext from "./store/AddonsContext";

function App() {
  const [step, setStep] = useState(1);

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const { info, setInfo } = useContext(InfoContext);
  const { _, setPlan } = useContext(PlanContext);
  const { __, setAddons } = useContext(AddonsContext);

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

    if (type === "back" && step < 5) {
      step === 2 ? callSubmitData() : "";
      step === 3 ? callHandleAddons() : "";
      setStep((prev) => (prev > 1 ? prev - 1 : prev));
    }

    if (type === "back" && step === 6) {
      setStep(1);
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

    if (type === "confirm" && step === 5) {
      setStep(6);
    }

    if (type === "confirm" && step === 6) {
      setInfo("");
      setPlan("");
      setAddons("");
    }
  }

  function goToStep2() {
    setStep(2);
  }

  return (
    <>
      <Steps step={step} />
      {step === 1 && <PersonalInfo ref={step1Ref} />}
      {step === 2 && <Plan ref={step2Ref} />}
      {step === 3 && <AddOns ref={step3Ref} />}
      {step === 4 && <Summary goToStep2={goToStep2} />}
      {step === 5 && <Message />}
      {step === 6 && <ViewData />}
      <Buttons step={step} onClick={handleSteps} />
    </>
  );
}

export default App;
