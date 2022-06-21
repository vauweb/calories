<script setup lang="ts">
import type { CaliumInfo } from "@/data/calium1";
import ListProductItem from "./ListProductItem.vue";
import { defineEmits, defineProps } from "vue";

type Props = {
  data: CaliumInfo[];
};
type Emits = {
  (e: "set", id: number, count: number): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const onSet = (id: number, count: number) => {
  emit("set", id, count);
};
</script>

<template>
  <ul class="list-group">
    <ListProductItem
      v-for="(info, index) in props.data"
      :key="index"
      :id="index"
      :info="info"
      @set="onSet"
    />
  </ul>
</template>
