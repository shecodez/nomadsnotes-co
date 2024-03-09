<script setup lang="ts">
// @ts-expect-error avoid lint error
import markdownParser from "@nuxt/content/transformers/markdown";

const props = defineProps<{
  markdownString: string;
}>();

const record = ref(null);

watch(
  () => props.markdownString,
  async () => {
    record.value = await markdownParser.parse("customId", props.markdownString);
    //.then((md: string) => (record.value = md));
  },
  { immediate: true }
);
</script>

<template>
  <pre>{{ record }}</pre>
  <content-renderer v-if="record" :value="record">
    <template #empty>
      <p>No content found.</p>
    </template>
  </content-renderer>
</template>
