<script setup lang="ts">
//const config = useRuntimeConfig();
//import SearchModal from "@/components/atomic/organisms/OSearchModal.vue";
import { useDebounceFn } from "@vueuse/core";
import type { Note } from "@/storyblok/types";

const categories = [
  "Fund$",
  "Accommodation",
  "Passage",
  "Food",
  "Adventure",
  "Productivity",
];
const menuNavigation = ["About", "WTF", "Shop", "Notes", "Contact"];

export type SearchNotesResult = {
  id: string;
  full_slug: string;
  content: Note;
};

const state = reactive({
  query: "",
  results: [] as SearchNotesResult[],

  loading: false,
  error: null,
});

const isOpenNavMenu = ref(false);
function toggleMenu() {
  isOpenNavMenu.value = !isOpenNavMenu.value;
  isOpenSearch.value = false;
}

const isOpenSearch = ref(false);
function toggleSearch() {
  isOpenSearch.value = !isOpenSearch.value;
  isOpenNavMenu.value = false;
}

const searchNotes = async (query: string) => {
  const resolveRelations = ["note.author"];

  try {
    state.loading = true;
    const { data } = await useStoryblokApi().get("cdn/stories", {
      starts_with: "notes/",
      version: import.meta.env.DEV ? "draft" : "published",
      resolve_relations: resolveRelations,
      search_term: query,
      per_page: 5,
    });
    //console.log("searching", data);

    return data.stories;
  } catch (e: any) {
    state.error = e;
  } finally {
    state.loading = false;
  }
};

const handleInputChange = useDebounceFn(async () => {
  state.results = await searchNotes(state.query);
}, 300);

const handleInputBlur = () => {
  setTimeout(() => (state.results = []), 300);
};

watch(isOpenNavMenu, (isOpen, _) => {
  const bodyEl = document.querySelector("body");
  if (isOpen) {
    // Disable scroll
    bodyEl!.style.overflow = "hidden";
  } else {
    // Enable scroll
    if (!isOpenSearch.value) bodyEl!.style.overflow = "auto";
  }
});

watch(isOpenSearch, (isOpen, _) => {
  const bodyEl = document.querySelector("body");
  if (isOpen) {
    // Disable scroll
    bodyEl!.style.overflow = "hidden";
  } else {
    // Enable scroll
    if (!isOpenNavMenu.value) bodyEl!.style.overflow = "auto";
  }
});

const isOpen = computed(() => isOpenNavMenu.value || isOpenSearch.value);
</script>

<template>
  <header class="pg-border-t pg-border-x relative w-full sticky top-0 z-3">
    <div
      v-if="!isOpenNavMenu && !isOpenSearch"
      class="header-bg absolute inset-0 h-full z--1"
    />
    <div px-4 class="center-flex-2">
      <div max-w-12>
        <nuxt-link to="/" class="inline-block relative">
          <img src="/images/categories_text_logo_only-t.png" alt="logo" />
          <img
            src="/images/categories_only-t.png"
            alt="logo"
            class="absolute animate-spin-60 top-0"
          />
        </nuxt-link>
        <!-- <div text-xs>{{ categories.join(" · ") }} ·</div> -->
      </div>

      <div class="w-full center gap-2 flex-wrap-reverse">
        <ul flex flex-1 justify-end gap-2 text-2xl class="font-cursive">
          <li v-for="(_, i) in 3" :key="categories[i]">
            {{ categories[i] }}
          </li>
        </ul>

        <div px-5 order-2 lg:order-none>
          <button
            @click="toggleMenu"
            class="btn-toggle-menu"
            :class="isOpenNavMenu ? 'open' : ''"
            title="menu"
          >
            <div class="icon">
              <div class="line line-outer"></div>
              <div class="line line-center"></div>
              <div class="line line-outer"></div>
            </div>
            <span sr-only>Toggle Menu</span>
          </button>
        </div>
        <div h-0 flex-basis-full order-1 />

        <ul flex flex-1 gap-2 text-2xl class="font-cursive">
          <li v-for="i in 3" :key="categories[i + 2]">
            {{ categories[i + 2] }}
          </li>
        </ul>
      </div>

      <div min-w-12 flex justify-center>
        <div class="center">
          <button
            @click="toggleSearch"
            class="btn-toggle-search"
            :class="isOpenSearch ? 'open' : ''"
            title="search"
          >
            <div class="icon">
              <div class="circle"></div>
              <div class="handle"></div>
            </div>
            <span sr-only>Toggle Search</span>
          </button>
        </div>
      </div>
    </div>
  </header>
  <!-- <teleport to="body"> -->
  <div v-if="isOpen" class="overlay pg-border" z-2>
    <!-- Full Screen Navigation Menu -->
    <div v-if="isOpenNavMenu">
      <nav flex-1 class="menu-navigation" p-5 flex flex-col>
        <ul w-full flex flex-col gap-2 items-center justify-center>
          <li w-14 h-auto>
            <nuxt-link to="/" class="inline-block">
              <img src="/images/favicon-t.png" alt="logo" w-full />
            </nuxt-link>
          </li>
          <li
            v-for="m in menuNavigation"
            :key="m"
            class="text-3xl text-white text-shadow font-statement"
          >
            <!-- <nuxt-link to="/">{{ m }}</nuxt-link> -->
            {{ m }}
          </li>
        </ul>
      </nav>
    </div>

    <!-- Full Screen Search -->
    <div v-if="isOpenSearch" mx-6 text-white>
      <form class="search-form">
        <input
          type="search"
          v-model="state.query"
          @input="handleInputChange"
          placeholder="Search..."
          text-4xl
          w-full
        />
        <!-- <button type="button"><div i-carbon:microphone text-2xl /></button> -->
        <button type="button" @click="handleInputChange">
          <div i-carbon:search text-2xl />
        </button>
      </form>

      <!-- search results -->
      <div>
        <h5 v-if="state.results.length" text-xs text-primary my-2>Notes</h5>
        <ul flex flex-col gap-1>
          <template v-for="result in state.results" :key="result.id">
            <li>
              <nuxt-link
                :to="`/${result.full_slug}`"
                class="block p-4 text-sm bg-black hover:bg-primary"
              >
                {{ result.content.title }}
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
  <!-- </teleport> -->
</template>

<style scoped>
img {
  max-width: unset; /* tailwind.css:355 */
}

.header-bg {
  backdrop-filter: saturate(180%) blur(20px);
}

.menu-navigation li {
  text-transform: uppercase;
}
.menu-navigation li:hover {
  text-decoration: underline;
}

.btn-toggle-menu .line {
  position: relative;
  background-color: black;
  height: 0.25rem;
  width: 3rem;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  transition: all 500ms ease-in-out;
}

.btn-toggle-menu .line-center {
  margin-left: -15px;
  transition: all 500ms ease-in-out;
}
.btn-toggle-menu .line-center:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: #ff004f;
  transition: all 500ms ease-in-out;
}
.btn-toggle-menu:hover .line {
  margin-left: -5px;
}
.btn-toggle-menu.open .line {
  background-color: #ff004f;
}
.btn-toggle-menu.open .icon .line-center {
  margin-left: 0;
  transform: rotate(45deg);
  height: 0.25rem;
  width: 3rem;
  border-radius: 1rem;
}
.btn-toggle-menu.open .icon .line-center::after {
  transform: rotate(-90deg);
}
.btn-toggle-menu.open .icon .line-outer {
  display: none;
}

.btn-toggle-search {
  position: relative;
}
.btn-toggle-search .circle {
  position: relative;
  background-color: transparent;
  margin-top: 3px;
  height: 24px;
  width: 24px;
  border: 3.5px solid #000;
  border-radius: 100%;
  transition: all 500ms ease-in-out;
  z-index: 1;
}
.btn-toggle-search .handle {
  display: block;
  position: absolute;
  border-width: 0;
  background-color: transparent;
  top: 4px;
  right: 4px;
  height: 35px;
  width: 3.5px;
  border-radius: 1rem;
  transform: rotate(-45deg);
}
.btn-toggle-search .handle:after {
  content: "";
  display: block;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 46%,
    rgba(255, 255, 255, 0.3) 50%,
    black 50%
  );
  height: 36px;
  width: 3.5px;
  transition: all 500ms ease-in-out;
}
.btn-toggle-search.open .circle {
  transform: scale(0.03);
  background: #000;
  border-color: #000;
}
.btn-toggle-search.open .handle {
  background-color: #000;
  transition: all 500ms ease-in-out;
}
.btn-toggle-search.open .handle:after {
  background-color: #000;
  transform-origin: center;
  transform: rotate(90deg);
}

.overlay {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.4);
  backdrop-filter: saturate(180%) blur(20px);
  transition: all 500ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search-form {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.search-form > input {
  background-color: transparent;
  border-bottom: 3.5px solid;
  padding: 0.2em;
}

.search-form > input::placeholder {
  color: white;
  opacity: 1; /* Firefox */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-60 {
  animation: spin 60s linear infinite;
}
</style>
