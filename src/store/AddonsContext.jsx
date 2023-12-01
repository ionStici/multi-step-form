import { useState, createContext } from "react";

const AddonsContext = createContext("");

export const AddonsContextProvider = ({ children }) => {
  const [addOns, setAddons] = useState("");

  return (
    <AddonsContext.Provider value={{ addOns, setAddons }}>
      {children}
    </AddonsContext.Provider>
  );
};

export default AddonsContext;
