<script setup lang="ts">
import type { CaliumInfo } from "@/data/calium1";
import Trash from "bootstrap-icons/icons/trash.svg?component";
import PlusCircle from "bootstrap-icons/icons/plus-circle.svg?component";

type Props = {
  info: CaliumInfo;
  id: number;
};
type Emits = {
  (e: "set", id: number, count: number): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const onSet = () => {
  const count = prompt("Введите сколько фактически съели в граммах:", "0");
  if (count) {
    emit("set", props.id, parseInt(count) || 0);
  }
};
const onUnSet = () => {
  if (confirm("Удалить данные?")) {
    emit("set", props.id, 0);
  }
};
</script>

<template>
  <li class="list-group-item d-flex align-items-center">
    <div class="flex-grow-1">
      <div>{{ props.info.name }}</div>
      <div class="small">
        {{ props.info.count100 }} / {{ props.info.need_norm }}
      </div>
    </div>
    <div class="text-end ms-2">{{ props.info.day_norm }}%</div>
    <div>
      <button @click="onSet" type="button" class="btn">
        <PlusCircle />
      </button>
    </div>
    <div>
      <button @click="onUnSet" type="button" class="btn"><Trash /></button>
    </div>
  </li>
</template>
