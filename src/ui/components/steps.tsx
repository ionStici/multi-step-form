import { useFormData } from "@/contexts/use-form-data";
import { useRef } from "react";
import { PersonalInfo } from "../step-1";
import { Buttons } from "./buttons";
import { Plan } from "../step-2";

export function Steps() {
  const { step, setStep, cleanup } = useFormData();

  const step1Ref = useRef<{ validate: (flag: boolean) => void }>(null);
  const step2Ref = useRef<{ submitData: () => void }>(null);
  const step3Ref = useRef<{ handleAddons: () => void }>(null);

  const callValidate = () => step1Ref.current?.validate(false);
  const callSubmitData = () => step2Ref.current?.submitData();
  const callHandleAddons = () => step3Ref.current?.handleAddons();

  function handleSteps(type: string) {
    if (type === "back" && step < 5) {
      if (step === 2) callSubmitData();
      if (step === 3) callHandleAddons();
      setStep((prev) => (prev > 1 ? prev - 1 : prev));
    }

    if (type === "back" && step === 6) setStep(1);

    if (type === "next" && step === 1) {
      const isValid = callValidate();
      console.log(isValid);
      if (isValid) setStep(2);
    }

    if (type === "next" && step === 2) {
      const isValid = callSubmitData();
      if (isValid) setStep(3);
    }

    if (type === "next" && step === 3) {
      callHandleAddons();
      setStep(4);
    }

    if (type === "confirm" && step === 4) setStep(5);
    if (type === "confirm" && step === 5) setStep(6);
    if (type === "confirm" && step === 6) cleanup();
  }

  return (
    <div>
      {step === 1 && <PersonalInfo ref={step1Ref} />}
      {step === 2 && <Plan ref={step2Ref} />}
      <Buttons onClick={handleSteps} />
    </div>
  );
}
