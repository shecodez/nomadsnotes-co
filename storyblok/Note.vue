<script setup>
defineProps({ blok: Object });
const noteContent = computed(() => renderRichText(blok.content));
</script>

<template>
  <div v-editable="blok" class="px-4">
    <StoryblokComponent
      v-for="blok in blok.title"
      :key="blok._uid"
      :blok="blok"
    />

    <div prose>
      {{ noteContent }}
    </div>
  </div>
</template>
