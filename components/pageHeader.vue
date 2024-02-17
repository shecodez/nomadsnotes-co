<script setup lang="ts">
const config = useRuntimeConfig();

const categories = [
  "Flight",
  "Accommodation",
  "Passage",
  "Food",
  "Adventure",
  "Photography",
];
const menuNavigation = [
  "About",
  "WTF",
  "Portfolio",
  "Hobby",
  "Notes",
  "Contact",
];

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
</script>

<template>
  <header relative w-full sticky top-0 z-3 border-t-black>
    <div
      v-if="!isOpenNavMenu && !isOpenSearch"
      class="header-bg absolute inset-0 h-full z--1"
    />
    <div p-4 class="center-flex-2">
      <div max-w-12>
        <nuxt-link to="/" class="inline-block relative">
          <img src="/images/categories_logo_only-t.png" alt="logo" />
          <img
            src="/images/categories_only-t.png"
            alt="logo"
            class="absolute animate-spin-60 top-0"
          />
        </nuxt-link>
        <!-- <div text-xs>{{ categories.join(" · ") }} ·</div> -->
      </div>

      <div
        class="w-full flex gap-2 flex-wrap-reverse items-center justify-center"
      >
        <ul flex gap-2 text-2xl text-gray-7 class="font-cursive">
          <li v-for="(_, i) in 3" :key="categories[i]">
            {{ categories[i] }}
          </li>
        </ul>

        <div px-4 mb-2 order-2 lg:order-none>
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

        <ul flex gap-2 text-2xl text-gray-7 class="font-cursive">
          <li v-for="i in 3" :key="categories[i + 2]">
            {{ categories[i + 2] }}
          </li>
        </ul>
      </div>

      <div min-w-12 flex justify-center>
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
  </header>

  <div v-if="isOpenNavMenu || isOpenSearch" class="overlay" z-2>
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
            class="text-3xl font-statement"
          >
            <!-- <nuxt-link to="/">{{ m }}</nuxt-link> -->
            {{ m }}
          </li>
        </ul>
      </nav>
    </div>

    <!-- Full Screen Search -->
    <div v-if="isOpenSearch" mx-6>
      <form class="search-form">
        <input type="search" value="" placeholder="Search..." text-4xl w-full />
        <button type="button"><div i-carbon:microphone text-2xl /></button>
        <button type="button"><div i-carbon:search text-2xl /></button>
      </form>
    </div>
  </div>
</template>

<style scoped>
header {
  border-left: 1.25rem solid black;
  border-right: 1.25rem solid black;
}

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
  height: 3px;
  width: 45px;
  margin-bottom: 7px;
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
  height: 3px;
  width: 45px;
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
  border: 1.25rem solid #000;
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
  gap: 3;
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
