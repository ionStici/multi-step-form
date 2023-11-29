import { useState } from "react";

import PersonalInfo from "./components/personalInfo";
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
    return <p>2</p>;
  }

  if (step === 3) {
    return <p>3</p>;
  }

  if (step === 4) {
    return <p>4</p>;
  }

  return (
    <section>
      <h1>⛔️ Error</h1>
      <p>Something went wrong!</p>
    </section>
  );
}

export default App;
