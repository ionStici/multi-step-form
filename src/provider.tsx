import { ReactNode } from "react";
import { FormProvider } from "./contexts/form-provider";
import { motion } from "framer-motion";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <FormProvider>
      <main>
        <motion.div
          initial={{ y: -25, scale: 0.975 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="wrapper"
        >
          {children}
        </motion.div>
      </main>
    </FormProvider>
  );
}
