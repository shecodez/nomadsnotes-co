<script setup lang="ts">
const config = useRuntimeConfig();

const categories = [
  "Flight",
  "Accomodation",
  "Public transit",
  "Food",
  "Adventure",
  "Photography",
];
const menuNavigation = [
  "Home",
  "About",
  "WTH",
  "Stationary",
  "Portfolio",
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

watch(
  () => isOpenNavMenu || isOpenSearch,
  (isOpen) => {
    const bodyEl = document.querySelector("body");
    if (isOpen) {
      // Disable scroll
      bodyEl!.style.overflow = "hidden";
    } else {
      // Enable scroll
      bodyEl!.style.overflow = "auto";
    }
  }
);
</script>

<template>
  <header relative w-full sticky top-0 z-3 border-t-black>
    <div
      v-if="!isOpenNavMenu && !isOpenSearch"
      class="header-bg absolute inset-0 h-full z--1"
    />
    <div flex-1 py-4 px-8 md:text-xl class="fx-2-ic">
      <div flex-1>
        <div>
          <nuxt-link to="/">
            <img src="/images/favicon-t.png" alt="logo" class="min-w-10 h-auto"
          /></nuxt-link>

          <!-- <div text-xs>{{ categories.join(" · ") }} ·</div> -->
        </div>
      </div>

      <div
        class="flex gap-2 flex-wrap-reverse items-center justify-center text-2xl"
      >
        <ul flex gap-2 text-primary class="font-cursive">
          <li v-for="(_, i) in 3" :key="categories[i]">
            {{ categories[i] }}
          </li>
        </ul>

        <div px-4 mb--2 order-2 lg:order-none>
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

        <ul flex gap-2 text-primary class="font-cursive">
          <li v-for="i in 3" :key="categories[i + 2]">
            {{ categories[i + 2] }}
          </li>
        </ul>
      </div>

      <div flex-1 justify-end>
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
      <nav flex-1 class="menu-navigation" p-5 flex flex-col text-2xl>
        <ul w-full flex flex-col gap-3 items-center justify-center>
          <li v-for="m in menuNavigation" :key="m">
            <!-- <nuxt-link to="/">{{ m }}</nuxt-link> -->
            {{ m }}
          </li>
        </ul>
      </nav>
    </div>

    <!-- Full Screen Search -->
    <div v-if="isOpenSearch">
      <form class="search-form">
        <input type="search" value="" placeholder="Search..." />
        <button type="button"><div i-carbon:microphone /></button>
        <button type="button"><div i-carbon:search /></button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.header-bg {
  backdrop-filter: saturate(180%) blur(20px);
}

.menu-navigation a {
  padding: 0.5em;
  text-transform: uppercase;
}
a:hover {
  text-decoration: underline;
}

.btn-toggle-menu .line {
  position: relative;
  z-index: 99;
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
  margin-left: -15px;
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
  z-index: 99;
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
  border: 1em solid #000;
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
  border-bottom: 2px solid white;
  font-size: 3.5em;
  color: white;
}
.search-form > button {
  font-size: 2em;
  color: white;
}
</style>
