import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Animate({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15, y: -5, scale: 0.99 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.25, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
