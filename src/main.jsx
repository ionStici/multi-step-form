import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { InfoContextProvider } from "./store/InfoContext.jsx";
import { PlanContextProvider } from "./store/PlanContext.jsx";
import { AddonsContextProvider } from "./store/AddonsContext.jsx";
import "./styles/general.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoContextProvider>
      <PlanContextProvider>
        <AddonsContextProvider>
          <App />
        </AddonsContextProvider>
      </PlanContextProvider>
    </InfoContextProvider>
  </React.StrictMode>
);
