<script setup>
import Modal from "@/components/ui/Modal.vue";

const openSearch = ref(false);
function openModal() {
  openSearch.value = true;
}
function closeModal() {
  openSearch.value = false;
}

const indexes = ["Notes"]; // , 'Notes', 'Tags'
const state = reactive({
  index: indexes[0],
  query: "",
  results: [],

  loading: false,
  error: undefined,
});

async function submitSearch() {
  try {
    state.loading = true;
    //await search(state.query)
  } catch (error) {
    //state.error = error
  } finally {
    state.loading = false;
  }
}
</script>

<template>
  <client-only>
    <button title="Search" @click="openModal">
      <slot />
      <span sr-only>Search</span>
    </button>

    <Modal
      :is-open="openSearch"
      css="w-11/12 md:max-w-lg mx-auto rounded bg-white dark:bg-gray-800 shadow-lg "
      @close="closeModal"
    >
      <form class="search-form" @submit.prevent="submitSearch">
        <div flex rounded-t-lg focus-within:ring>
          <select
            v-model="state.index"
            class="filter-dropdown p-3 rounded-tl focus:outline-none bg-transparent"
          >
            <template v-for="(f, i) in indexes" :key="`search-index-${i}`">
              <option :value="f">
                {{ f }}
              </option>
            </template>
          </select>

          <input
            id="search"
            v-model="state.query"
            type="text"
            placeholder="Search..."
            class="p-3 flex-1 focus:outline-none bg-transparent"
            @keydown.enter.prevent="submitSearch"
          />

          <button text-primary rounded-tr class="px-3.5" @click="submitSearch">
            <div i-carbon:search />
          </button>
        </div>
      </form>

      <div
        class="p-4 border-y border-dashed border-gray-500 border-opacity-50 max-h-xl overflow-y-auto"
      >
        <!-- <ul v-if="!!result">
          <template v-for="(r, i) in result?.hits" :key="`result-${i}`">
            <li border p-2>
              <pre>{{ r }}</pre>
            </li>
          </template>
        </ul> 
        <div v-else py-6 text-center opacity-60>
          No recent searches
        </div>-->
        <pre>{{ state.results }}</pre>
      </div>

      <div flex items-center justify-between rounded-b-lg>
        <button
          class="p-2 bg-red hover:bg-red-500 rounded-bl text-sm"
          @click="closeModal"
        >
          <div i-carbon:close />
        </button>
        <div px-4 text-xs font-bold text-right>
          Hits: {{ state.results?.length || 0 }}
        </div>
      </div>
    </Modal>
  </client-only>
</template>

<style scoped>
select.filter-dropdown option {
  background-color: black;
  /* @apply bg-black; */
}
</style>

<style>
.ais-Hits-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.ais-Hits-item {
  width: 100%;
  border-radius: 0.25rem;
}
</style>
