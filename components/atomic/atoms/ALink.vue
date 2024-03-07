<script setup lang="ts">
import type { iLink } from "./_atomTypes.ts";

defineProps({
  link: {
    type: Object as PropType<iLink>,
  },
});
</script>

<template>
  <nuxt-link :to="link?.url" text-sm font-bold hover:text-primary>
    {{ link?.name }}
  </nuxt-link>
</template>
