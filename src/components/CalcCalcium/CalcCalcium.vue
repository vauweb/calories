<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import ListProducts from "./ListProducts.vue";
import ArrowCounterclockwise from "bootstrap-icons/icons/arrow-counterclockwise.svg?component";
import { calium_1, type CaliumInfo } from "@/data/calium1";

const caliumInfo = reactive<CaliumInfo[]>(calium_1());
const caliumNorm = ref<number>(800);

const reset = () => {
  caliumNorm.value = 800;
  caliumInfo.forEach((i) => {
    i.fact = 0;
    i.day_norm = 0;
  });
};
const update = () => {
  caliumInfo.forEach((i) => {
    i.k_norm = Math.round((caliumNorm.value / i.count100) * 100) / 100;
    i.need_norm = Math.round((caliumNorm.value / i.count100) * 100);
    i.day_norm = Math.round((i.fact / i.need_norm) * 10000) / 100;
  });
};

const day_norm_sum = computed(() => {
  return caliumInfo.reduce((r, i) => {
    console.log(i);
    return r + i.day_norm;
  }, 0);
});

const onSet = (id: number, count: number) => {
  if (caliumInfo[id]) {
    caliumInfo[id].fact = count;
    caliumInfo[id].day_norm =
      Math.round((caliumInfo[id].fact / caliumInfo[id].need_norm) * 10000) /
      100;
  }
};

const caliumNormModel = computed({
  get() {
    return caliumNorm.value;
  },
  set(v) {
    caliumNorm.value = v ?? 0;
    update();
  },
});
</script>

<template>
  <div>
    <div
      class="navbar bg-body d-flex align-items-center justify-content-between p-2 sticky-top"
    >
      <div>
        <button type="button" class="btn" @click="reset">
          <ArrowCounterclockwise />
        </button>
      </div>
      <div class="flex-grow-1 ps-2 pe-2">
        <input class="form-text" type="number" v-model="caliumNormModel" />
      </div>
      <div>Итого: {{ day_norm_sum }}%</div>
    </div>
    <div>
      <ListProducts :data="caliumInfo" @set="onSet" />
    </div>
  </div>
</template>
