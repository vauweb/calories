import type { FunctionalComponent } from "vue";
import { computed, reactive } from "vue";
import { ListProducts } from "./ListProducts";
import ArrowCounterclockwise from "bootstrap-icons/icons/arrow-counterclockwise.svg?raw";
import { calium_1, type CaliumInfo } from "@/data/calium1";

export const CalcCalcium: FunctionalComponent = () => {
  const caliumInfo = reactive<CaliumInfo[]>(calium_1);

  const reset = () => {
    caliumInfo.forEach((i) => {
      i.fact = 0;
      i.day_norm = 0;
    });
  };
  const day_norm_sum = computed(() => {
    return caliumInfo.reduce((r, i) => r + i.day_norm, 0);
  });
  const onSet = (id: number, count: number) => {
    if (caliumInfo[id]) {
      caliumInfo[id].fact = count;
      caliumInfo[id].day_norm =
        Math.round((caliumInfo[id].fact / caliumInfo[id].need_norm) * 10000) /
        100;
    }
  };
  return (
    <div>
      <div class="navbar bg-body d-flex align-items-center justify-content-between p-2 sticky-top">
        <div>
          <button
            type="button"
            class="btn"
            onClick={reset}
            innerHTML={ArrowCounterclockwise}
          ></button>
        </div>
        <div>
          Итого: <span>{day_norm_sum.value}</span>%
        </div>
      </div>
      <div>
        <ListProducts data={caliumInfo} onSet={onSet} />
      </div>
    </div>
  );
};
