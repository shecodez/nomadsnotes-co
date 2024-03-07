<script setup lang="ts">
import ALogo from "@/components/atomic/atoms/ALogo.vue";
import MLinkList from "@/components/atomic/molecules/MLinkList.vue";
import ALinkButton from "@/components/atomic/atoms/ALinkButton.vue";
import type { iLink } from "@/components/atomic/atoms/_atomTypes";

defineProps({
  links: {
    type: Object as PropType<iLink[]>,
  },
});
</script>

<template>
  <header
    class="absolute inset-x-0 text-gray-100 py-4 flex flex-wrap items-center"
  >
    <div
      class="w-full md:w-3/4 px-4 pb-4 md:pb-0 flex items-center justify-between"
    >
      <ALogo />
      <MLinkList class="flex" :links="links" />
    </div>

    <div class="w-full md:w-1/4 px-4">
      <ALinkButton :link="{ name: 'Button', url: '#' }" />
    </div>
  </header>
</template>
@/components/atomic/atoms/_atomTypes
