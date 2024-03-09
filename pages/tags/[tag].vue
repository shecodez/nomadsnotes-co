<script setup lang="ts">
import NoteCard from "@/components/ui/Card.vue";

const {
  params: { tag },
} = useRoute();

//const filter = tag.split(",");
const q = queryContent("notes")
  .only(["_path", "title", "description", "author", "published_at"])
  .where({ tags: { $contains: tag } })
  // .sort({ date: -1 })
  .find(); // ; <ContentList :query="q">
const { data: notes } = await useAsyncData("tagged-notes", async () => {
  return await q;
});

const config = useRuntimeConfig();
useHead({
  title: `${tag} | ${config.public.appName}`,
  meta: [{ name: "description", content: `Nomad's ${tag} notes` }],
});
</script>

<template>
  <div class="tagged pg-bg-color mx-10 mb-10 p-10">
    <nuxt-link to="/tags" class="btn font-cursive">
      <div class="i-carbon:arrow-left" />
      Back to Tags
    </nuxt-link>

    <h2 class="center mt-5 mb-10 text-5xl font-statement">
      {{ tag.toString().replace("-", " ") }} notes
    </h2>

    <div mb-10>
      <div
        v-if="notes?.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
      >
        <template v-for="(note, i) in notes" :key="note.title + i">
          <NoteCard
            :slug="note._path"
            :title="note.title"
            :description="note.description"
            :author="note.author"
            :published_at="note.published_at"
          />
        </template>
      </div>
      <div v-else text-center>No notes found</div>
    </div>
  </div>
</template>
