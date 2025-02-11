import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import {
  AddOnsSchema,
  FormContext,
  FormContextSchema,
  InfoSchema,
  PlanSchema,
} from "./form-context";

export function FormProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<number>(() => {
    const savedStep = localStorage.getItem("formStep");
    return savedStep ? parseInt(savedStep, 10) : 1;
  });

  const [info, setInfo] = useState<InfoSchema>(() => {
    const savedInfo = localStorage.getItem("formInfo");
    return savedInfo ? JSON.parse(savedInfo) : { name: "", email: "", tel: "" };
  });

  const [plan, setPlan] = useState<PlanSchema>(() => {
    const savedPlan = localStorage.getItem("formPlan");
    return savedPlan ? JSON.parse(savedPlan) : { activePlan: "", billed: "", price: "" };
  });

  const [addOns, setAddons] = useState<AddOnsSchema>(() => {
    const savedAddOns = localStorage.getItem("formAddOns");
    return savedAddOns ? JSON.parse(savedAddOns) : [];
  });

  const updateStep: Dispatch<SetStateAction<number>> = (value) => {
    setStep((prev) => {
      const newValue = value instanceof Function ? value(prev) : value;
      localStorage.setItem("formStep", newValue.toString());
      return newValue;
    });
  };

  const updateInfo: Dispatch<SetStateAction<InfoSchema>> = (value) => {
    setInfo((prev) => {
      const newValue = value instanceof Function ? value(prev) : value;
      localStorage.setItem("formInfo", JSON.stringify(newValue));
      return newValue;
    });
  };

  const updatePlan: Dispatch<SetStateAction<PlanSchema>> = (value) => {
    setPlan((prev) => {
      const newValue = value instanceof Function ? value(prev) : value;
      localStorage.setItem("formPlan", JSON.stringify(newValue));
      return newValue;
    });
  };

  const updateAddOns: Dispatch<SetStateAction<AddOnsSchema>> = (value) => {
    setAddons((prev) => {
      const newValue = value instanceof Function ? value(prev) : value;
      localStorage.setItem("formAddOns", JSON.stringify(newValue));
      return newValue;
    });
  };

  const cleanup = () => {
    setInfo({ name: "", email: "", tel: "" });
    setPlan({ activePlan: "", billed: "", price: "" });
    setAddons([]);
    localStorage.removeItem("formInfo");
    localStorage.removeItem("formPlan");
    localStorage.removeItem("formAddOns");
  };

  const value: FormContextSchema = {
    step,
    info,
    plan,
    addOns,
    setInfo: updateInfo,
    setPlan: updatePlan,
    setAddons: updateAddOns,
    setStep: updateStep,
    cleanup,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
