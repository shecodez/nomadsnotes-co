<script setup lang="ts">
import ATitle from "@/components/atomic/atoms/ATitle.vue";
import AText from "@/components/atomic/atoms/AText.vue";
import ALinkButton from "@/components/atomic/atoms/ALinkButton.vue";
import type { iBanner } from "@/components/atomic/molecules/_moleculeTypes";

defineProps({
  banner: {
    type: Object as PropType<iBanner>,
  },
});
</script>

<template>
  <div class="px-4 pt-40 pb-12 md:py-32 bg-blue-900 text-gray-100">
    <header class="max-w-sm md:max-w-xl mx-auto">
      <ATitle tag="h1" :content="banner?.title" />
      <AText :text="banner?.text" />
      <ALinkButton
        v-if="banner?.link"
        class="md:max-w-xs"
        :link="{ name: banner.link.name, url: banner.link.url }"
      />
    </header>
  </div>
</template>
@/components/atomic/molecules/_moleculeTypes
