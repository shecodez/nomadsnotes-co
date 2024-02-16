<script lang="ts" setup>
defineProps(["post"]);
</script>

<template>
  <a :href="post._path" grow relative flex flex-col gap-2 shadow-md p-3>
    <div
      class="feature-image-container relative aspect-[16/9] lg:aspect-square"
    >
      <img
        :src="post.featureImage.url"
        :alt="post.featureImage.title"
        class="absolute inset-0 h-full w-full bg-gray-50 object-cover"
      />

      <div class="overlay" absolute inset-0 h-full w-full bg-black opacity-0 />
      <p class="post-description" text-center text-white opacity-0 z-10>
        {{ post.description }}
      </p>

      <div absolute bottom-2 right-2 font-mono text-xs text-yellow>
        <time :datetime="post.publishDate">{{ post.publishDate }}</time>
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
      {{ post.title }}
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
.feature-image-container:hover .post-description {
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
