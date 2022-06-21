import type { FunctionalComponent } from "vue";
import { RouterView } from "vue-router";
import { Header } from "@/components/Header";
import { CalcCalcium } from "@/components/CalcCalcium";

export const App: FunctionalComponent = () => {
  return (
    <div>
      {/*<Header />*/}
      {/*<RouterView />*/}
      <CalcCalcium />
    </div>
  );
};
