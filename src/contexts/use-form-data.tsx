import { useContext } from "react";
import { FormContext } from "./form-context";

export function useFormData() {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormData must be used within FormProvider");
  return context;
}
