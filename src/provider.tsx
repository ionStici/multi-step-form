import { ReactNode } from "react";
import { FormProvider } from "./contexts/form-provider";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <FormProvider>
      <main>
        <div className="wrapper">{children}</div>
      </main>
    </FormProvider>
  );
}
