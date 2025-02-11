import { Provider } from "./provider";
import { StepsAside } from "./ui/components/steps-aside";
import { StepsMain } from "./ui/components/steps-main";

export function App() {
  return (
    <Provider>
      <StepsAside />
      <StepsMain />
    </Provider>
  );
}
