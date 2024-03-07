<script setup lang="ts">
import MLinkList from "@/components/atomic/molecules/MLinkList.vue";
import type { iLink } from "@/components/atomic/atoms/_atomTypes";

defineProps({
  columnOneLinks: {
    type: Object as PropType<iLink[]>,
  },
  columnTwoLinks: {
    type: Array as PropType<iLink[]>,
  },
});
</script>

<template>
  <footer class="flex flex-wrap text-white">
    <div class="w-full md:w-1/4 bg-gray-900 p-4 md:p-12">
      <MLinkList class="flex flex-col" :links="columnOneLinks" />
    </div>
    <div class="w-full md:w-3/4 bg-blue-900 p-4 md:p-12">
      <MLinkList class="flex flex-col" :links="columnTwoLinks" />
    </div>
  </footer>
</template>
@/components/atomic/atoms/_atomTypes
