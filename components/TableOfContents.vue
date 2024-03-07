<script setup>
// define links prop
defineProps(["links"]);

const showOutline = ref(true);
// TODO: if on mobile showOutline = false

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  const _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        const flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);

  // console.log({ _links });
  return _links;
};
</script>

<template>
  <div p-4 mb-2 border-1 rounded flex items-center justify-between>
    <h3 text-xl font-bold>Outline</h3>
    <button hover:text-primary @click="showOutline = !showOutline">
      <div
        :class="showOutline ? 'rotate-180' : 'bg-gray-200'"
        i-carbon:chevron-down
      />
      <span sr-only>Expand/Collapse Outline</span>
    </button>
  </div>
  <nav
    v-if="showOutline"
    class="toc max-h-[calc(100vh-10rem)] max-w-sm px-4 rounded overflow-auto"
  >
    <ul font-thin text-sm>
      <!-- render each link with depth class -->
      <template v-for="link of flattenLinks(links)" :key="link.id">
        <li :class="`toc-li _${link.depth}`">
          <a :href="`#${link.id}`">
            {{ link.text }}
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style>
:root {
  --bg-color: rgb(229 231 235);
  --primary-color: rgb(255 0 79);
}
</style>

<style scoped>
.toc-li {
  position: relative;
  border-left: 1px solid black;
  padding-bottom: 0.5rem;
}
.toc-li:last-child {
  border: none;
}
.toc-li._2:before {
  content: "";
  background-color: var(--bg-color);
  box-shadow: inset 0 0 0 2.5px var(--bg-color);
  border: 1px solid #000;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  position: absolute;
  left: -8.5px;
}
.toc-li.is-active:before {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.toc-li a {
  vertical-align: top;
  line-height: 1em;
}

.toc-li._2 {
  padding-left: 1rem;
}

.toc-li._3 {
  padding-left: 1.75rem;
  /* @apply pl-3; */
}

.toc-li._4 {
  padding-left: 2.5rem;
  /* @apply pl-6; */
}

.toc-li._undefined {
  padding-left: 3rem;
  /* @apply pl-8; */
}
</style>
