<script setup lang="ts">
const {
  params: { tag },
} = useRoute();

//const filter = tag.split(",");
const q = queryContent("notes")
  .only(["_path", "title", "description", "date"])
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
      <ul v-if="notes?.length" flex items-center justify-center gap-2>
        <template v-for="(p, i) in notes" :key="`${tag}-post-${i}`">
          <li>
            <nuxt-link :to="p._path">
              <div
                class="sticky-note max-w-xs shadow-md"
                style="background-color: rgb(253, 255, 164)"
              >
                <div class="relative overflow-hidden">
                  <div class="note-text p-4 flex flex-col gap-2">
                    <h3 text-lg font-bold>{{ p.title }}</h3>
                    <p class="text-sm font-thin">
                      {{ p.description }}
                    </p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </li>
        </template>
      </ul>

      <div v-else text-center>No notes found</div>
    </div>
  </div>
</template>

<style scoped>
.sticky-note {
  border-bottom-right-radius: 1.5rem;
}
.sticky-note .note-text:after {
  content: "";
  position: absolute;
  z-index: 1;
  right: -5px;
  bottom: -5px;
  width: 20px;
  height: 20px;
  box-shadow: 0 5px 20px #00000080;
}
</style>
