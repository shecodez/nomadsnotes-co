<script setup lang="ts">
import MCard from "@/components/atomic/molecules/MCard.vue";
import type { iCard } from "@/components/atomic/molecules/_moleculeTypes";

defineProps({
  cards: {
    type: Object as PropType<iCard[]>,
  },
});
</script>

<template>
  <div class="flex flex-wrap items-stretch md:-mr-4">
    <div
      class="w-full md:w-1/3 md:pr-4 pb-4"
      v-for="card in cards"
      :key="card.title"
    >
      <MCard class="h-full" :card="card" />
    </div>
  </div>
</template>
@/components/atomic/molecules/_moleculeTypes
