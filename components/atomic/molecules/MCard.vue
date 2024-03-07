<script setup lang="ts">
import ATitle from "@/components/atomic/atoms/ATitle.vue";
import AText from "@/components/atomic/atoms/AText.vue";
import type { iCard } from "@/components/atomic/molecules/_moleculeTypes";

defineProps({
  card: {
    type: Object as PropType<iCard>,
  },
});
</script>

<template>
  <div
    class="p-6 border border-blue-200 hover:shadow-lg rounded-sm bg-blue-100 text-blue-800 transition ease-in-out duration-500"
  >
    <ATitle tag="h2" :content="card?.title" />
    <AText :text="card?.text" />
  </div>
</template>
@/components/atomic/molecules/_moleculeTypes
