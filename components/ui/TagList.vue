<script setup lang="ts">
defineProps(["tags"]);
const showTags = ref(true);
</script>

<template>
  <div inline-flex items-center gap-2 py-2>
    <button v-if="tags.length > 1" class="btn" @click="showTags = !showTags">
      <div i-carbon:tag />
      <span uppercase>Tag(s):</span>
    </button>

    <nav v-if="showTags" font-bold text-sm>
      <ul flex flex-wrap items-center gap-1>
        <li v-for="t in tags" :key="t">
          <nuxt-link :to="`/tags/${t}`" class="hover:text-primary">
            #{{ t }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
