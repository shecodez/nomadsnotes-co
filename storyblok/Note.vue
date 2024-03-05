<script setup>
defineProps({ blok: Object });
const noteContent = computed(() => renderRichText(blok.content));
</script>

<template>
  <div v-editable="blok" class="px-4">
    <h1>{{ blok.title }}</h1>

    <div prose>
      {{ noteContent }}
    </div>
  </div>
</template>
