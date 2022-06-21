import type { FunctionalComponent } from "vue";
import { computed, reactive, ref } from "vue";
import { ListProducts } from "./ListProducts";
import ArrowCounterclockwise from "bootstrap-icons/icons/arrow-counterclockwise.svg?raw";
import { calium_1, type CaliumInfo } from "@/data/calium1";

const caliumInfo = reactive<CaliumInfo[]>(calium_1());
const caliumNorm = ref<number>(800);

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

const updateCaliumNorm = (e: Event) => {
  console.log((e.currentTarget as HTMLInputElement)?.value);
  caliumNorm.value =
    parseInt((e.currentTarget as HTMLInputElement)?.value) ?? 0;
};

export const CalcCalcium: FunctionalComponent = () => {
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
          <input
            class="form-text w-100"
            type="number"
            disabled
            value={caliumNorm.value}
            onInput={updateCaliumNorm}
          />
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
