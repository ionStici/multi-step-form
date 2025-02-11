import { createContext, Dispatch, SetStateAction } from "react";

export type InfoSchema = { name: string; email: string; tel: string };
export type PlanSchema = { activePlan: string; billed: string; price: string };
export type AddOnsSchema = { name: string; about: string; monthly: string; yearly: string }[];
export type FormContextSchema = {
  step: number;
  info: InfoSchema;
  plan: PlanSchema;
  addOns: AddOnsSchema;
  setInfo: Dispatch<SetStateAction<InfoSchema>>;
  setPlan: Dispatch<SetStateAction<PlanSchema>>;
  setAddons: Dispatch<SetStateAction<AddOnsSchema>>;
  setStep: Dispatch<SetStateAction<number>>;
  cleanup: () => void;
} | null;

const FormContext = createContext<FormContextSchema>(null);

export { FormContext };
