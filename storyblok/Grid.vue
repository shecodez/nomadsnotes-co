<template>
  <div flex flex-col my-10 p-4 class="pg-bg-color">
    <div v-editable="blok" class="divide-y divide-black">
      <StoryblokComponent
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
