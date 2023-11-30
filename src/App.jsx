import { useState } from "react";

import PersonalInfo from "./components/step1/PersonalInfo";
import Steps from "./components/Steps";
import Buttons from "./components/Buttons";

import { assets } from "./store/Assets";

function App() {
  const [step, setStep] = useState(1);

  if (step === 1) {
    return (
      <>
        <Steps step={step} />
        <PersonalInfo />
        <Buttons step={step} />
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Steps step={step} />
        {2}
        <Buttons step={step} />
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Steps step={step} />
        {3}
        <Buttons step={step} />
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Steps step={step} />
        {4}
        <Buttons step={step} />
      </>
    );
  }

  return (
    <section>
      <h1>⛔️ Error</h1>
      <p>Something went wrong!</p>
    </section>
  );
}

export default App;
