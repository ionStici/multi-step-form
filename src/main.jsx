import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import { InfoContextProvider } from "./store/InfoContext.jsx";
import { PlanContextProvider } from "./store/PlanContext.jsx";
import "./styles/general.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoContextProvider>
      <PlanContextProvider>
        <Layout>
          <App />
        </Layout>
      </PlanContextProvider>
    </InfoContextProvider>
  </React.StrictMode>
);
