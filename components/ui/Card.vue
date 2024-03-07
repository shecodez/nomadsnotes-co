<script lang="ts" setup>
defineProps(["note"]);
</script>

<template>
  <a :href="note._path" grow relative flex flex-col gap-2 shadow-md p-3>
    <div
      class="feature-image-container relative aspect-[16/9] lg:aspect-square"
    >
      <img
        :src="note.cover_image.url"
        :alt="note.cover_image.alt"
        class="absolute inset-0 h-full w-full bg-gray-50 object-cover"
      />

      <div class="overlay" absolute inset-0 h-full w-full bg-black opacity-0 />
      <p class="note-description" text-center text-white opacity-0 z-10>
        {{ note.description }}
      </p>

      <div absolute bottom-2 right-2 font-mono text-xs text-yellow>
        <time :datetime="note.updated_date">{{ note.updated_date }}</time>
      </div>
    </div>

    <h3
      m-2
      text-lg
      font-semibold
      leading-6
      text-center
      font-cursive
      line-clamp-2
    >
      {{ note.title }}
    </h3>
  </a>
</template>

<style scoped>
.overlay {
  transition: 0.5s ease-in-out;
}
.feature-image-container:hover .overlay {
  opacity: 0.8;
  backdrop-filter: saturate(180%) blur(20px);
}
.feature-image-container:hover .note-description {
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
