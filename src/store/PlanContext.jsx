import { useState, createContext } from "react";

const PlanContext = createContext("");

export const PlanContextProvider = ({ children }) => {
  const [plan, setPlan] = useState("");

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanContext;
