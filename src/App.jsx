import { useState } from "react";

const assets = {
  bgSidebarDesktop: "/assets/images/bg-sidebar-desktop.svg",
  bgSidebarMobile: "/assets/images/bg-sidebar-mobile.svg",
  iconAdvanced: "/assets/images/icon-advanced.svg",
  iconArcade: "/assets/images/icon-arcade.svg",
  iconCheckmark: "/assets/images/icon-checkmark.svg",
  iconPro: "/assets/images/icon-pro.svg",
  iconThankYou: "/assets/images/icon-thank-you.svg",
};

function App() {
  const [step, setStep] = useState(1);

  console.log(assets);

  if (step === 1) {
    return <p>1</p>;
  }

  if (step === 2) {
    return <p>1</p>;
  }

  if (step === 3) {
    return <p>1</p>;
  }

  if (step === 4) {
    return <p>1</p>;
  }

  return (
    <section>
      <h1>⛔️ Error</h1>
      <p>Something went wrong!</p>
    </section>
  );
}

export default App;
