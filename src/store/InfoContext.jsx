import { useState, createContext } from "react";

const InfoContext = createContext("");

export const InfoContextProvider = ({ children }) => {
  const [info, setInfo] = useState("");

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
