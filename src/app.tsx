import { Provider } from "./provider";
import { Steps } from "./ui/components/steps";
import { StepsAside } from "./ui/components/steps-aside";

export function App() {
  return (
    <Provider>
      <StepsAside />
      <Steps />
    </Provider>
  );
}
