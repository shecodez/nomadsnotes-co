<script setup lang="ts">
import { useActiveScroll } from "vue-use-active-scroll";

const { links } = defineProps(["links"]);

const showOutline = ref(true);
// TODO: if on mobile showOutline = false

const targets = computed(() =>
  links.flatMap(({ id, children = [] }) => [
    id,
    ...children.map(({ id }) => id),
  ])
);

const { setActive, activeId } = useActiveScroll(targets, {
  overlayHeight: 150,
});

const isSSR = ref(true);
onMounted(() => (isSSR.value = false));
</script>

<template>
  <aside border-8 border-white max-h-lg overflow-y-auto>
    <div p-4 flex items-center justify-between>
      <h3 text-xl font-bold>Outline</h3>
      <button hover:text-primary @click="showOutline = !showOutline">
        <div :class="showOutline ? 'rotate-180' : ''" i-carbon:chevron-down />
        <span sr-only>Expand/Collapse Outline</span>
      </button>
    </div>

    <nav v-if="showOutline" class="toc max-h-[calc(100vh-10rem)] max-w-sm px-5">
      <ul class="parent-ul text-sm">
        <template v-for="(link, i) in links" :key="link.id">
          <li
            class="toc-li pl-5"
            :class="{ 'is-active': activeId === link.id }"
          >
            <nuxt-link
              :to="{ hash: `#${link.id}` }"
              :class="{
                'is-active': (isSSR && i === 0) || activeId === link.id,
                'is-active--parent': link.children?.some(
                  ({ id }) => id === activeId
                ), // If any nested child is active
              }"
              @click="setActive(link.id)"
            >
              {{ link.text }}
            </nuxt-link>
            <!-- Nested List - Start -->
            <ul v-if="link.children" class="child-ul text-xs font-thin">
              <template v-for="child in link.children" :key="child.id">
                <li
                  class="toc-li pl-5"
                  :class="{ 'is-active': activeId === child.id }"
                >
                  <nuxt-link
                    :to="{ hash: `#${child.id}` }"
                    :class="{ 'is-active': activeId === child.id }"
                    @click="setActive(child.id)"
                  >
                    {{ child.text }}
                  </nuxt-link>
                </li>
              </template>
            </ul>
            <!-- Nested List - End -->
          </li>
        </template>
      </ul>
    </nav>
  </aside>
</template>

<style>
.target {
  scroll-margin-top: 150px; /* account for sticky header */
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
.parent-ul .toc-li:before {
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
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

a {
  text-decoration: none;
  color: #111;
  vertical-align: top;
  line-height: 1em;
}
.child-ul a {
  line-height: 1.4em;
}

.is-active {
  color: var(--primary-color);
}

.is-active--parent {
  color: var(--primary-color);
  font-weight: bold;
}
</style>
