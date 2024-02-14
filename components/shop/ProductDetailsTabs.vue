<script setup lang="ts">
import { parseMarkdown } from "~/utils";

// const product = await queryContent("/products")
//   .where({ _path: "/products/2024-nonodigi-zenbujo-yang" })
//   .find();

const tabList = reactive([
  {
    label: "description",
    content:
      "This is a fully hyperlinked 2024 digital planner for use on your desktop/tablet and is compatible with many of your favorite digital planning apps, such as Goodnotes (iOS) or Penly (Android). <br /><br /> It is dated for 2024 with 12 months, 52 weeks, and 366 days. <br /><br /> All monthly and weekly pages are Sunday start.",
  },
  {
    label: "what's included",
    content:
      "_This is a digital product --no physical planner will be sent to you._ <br /><br /> You will receive a zip file containing the dated fully hyperlinked Sunday start - 2024 NONODIGI ZenBuJo Yang.PDF. <br /><br /> _FOR PERSONAL USE ONLY :)_",
  },
  {
    label: "how to use",
    content:
      "Please [Watch]() the full tutorial & setup guide for this planner before you buy.",
  },
  {
    label: "refund policy",
    content:
      "Due to the digital nature of this product, _refunds, returns, or exchanges will **not** be provided for any reason_. Please double-check your cart before purchase.",
  },
]);

//tabList.map(async (t, i) => (t.content = await parseMarkdown(t.content)));

const activeTabIndex = ref(0);
function setActiveTabIndex(index: number) {
  activeTabIndex.value = index;
}
</script>

<template>
  <div>
    <div flex gap-2 py-4>
      <template v-for="(t, i) in tabList" :key="t.label">
        <button
          @click="setActiveTabIndex(i)"
          px-3
          py-1.5
          rounded-full
          text-xs
          :class="activeTabIndex === i ? 'bg-gray-300' : 'border'"
        >
          {{ t.label }}
        </button>
      </template>
    </div>

    <template v-for="(t, i) in tabList" :key="`tab-${i}-content`">
      <div
        min-h-40
        max-h-40
        border-2
        rounded
        p-2
        overflow-auto
        :class="activeTabIndex === i ? 'block' : 'hidden'"
      >
        <p>{{ t.content }}</p>
      </div>
    </template>
  </div>
</template>
