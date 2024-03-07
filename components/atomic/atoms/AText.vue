<script setup lang="ts">
defineProps({
  text: {
    type: String,
  },
});
</script>

<template>
  <p pb-6>{{ text }}</p>
</template>
