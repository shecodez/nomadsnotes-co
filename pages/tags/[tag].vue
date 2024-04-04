<script setup lang="ts">
import NoteCard from "@/components/ui/Card.vue";

const {
  params: { tag },
} = useRoute();

// const q = queryContent("notes")
//   .only(["_path", "title", "description", "author", "published_at"])
//   .where({ tags: { $contains: tag } })
//   // .sort({ date: -1 })
//   .find(); // ; <ContentList :query="q">
// const { data: notes } = await useAsyncData("tagged-notes", async () => {
//   return await q;
// });

const resolveRelations = ["note.author"];
const { data } = await useStoryblokApi().get("cdn/stories", {
  starts_with: "notes/",
  version: import.meta.env.DEV ? "draft" : "published",
  resolve_relations: resolveRelations,
  with_tag: tag.toString(),
});
const notes = data.stories.map((story) => {
  const note = {
    ...story.content,
    author: story.content.author.content,
    _path: story.full_slug,
  };
  return note;
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

    <h1 class="center mt-5 mb-10 text-5xl font-statement">
      {{ notes.length }} note(s) on
      <span text-primary>&nbsp;#{{ tag.toString().replace("-", " ") }}</span>
    </h1>

    <div mb-10>
      <div
        v-if="notes?.length"
        class="mt-4 columns-1 sm:columns-2 lg:columns-3 gap-8"
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
