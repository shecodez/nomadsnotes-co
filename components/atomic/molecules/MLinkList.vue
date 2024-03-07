<script setup lang="ts">
import ALink from "@/components/atomic/atoms/ALink.vue";
import type { iLink } from "@/components/atomic/atoms/_atomTypes";

defineProps({
  links: {
    type: Array as PropType<iLink[]>,
  },
});
</script>

<template>
  <ul>
    <template v-for="(link, i) in links" :key="link.name + i">
      <li>
        <ALink :link="link" />
      </li>
    </template>
  </ul>
</template>
@/components/atomic/atoms/_atomTypes
