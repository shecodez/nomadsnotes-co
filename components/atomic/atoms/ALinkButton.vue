<script setup lang="ts">
import type { iLink } from "./_atomTypes.ts";

defineProps({
  link: {
    type: Object as PropType<iLink>,
  },
});
</script>

<template>
  <nuxt-link
    :to="link?.url"
    class="block text-center py-1 px-4 bg-blue-100 text-blue-500 font-semibold rounded"
  >
    {{ link?.name }}
  </nuxt-link>
</template>
./_atomTypes.js
