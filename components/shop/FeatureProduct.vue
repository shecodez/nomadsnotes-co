<script setup lang="ts">
import ProductDetailsTabs from "./ProductDetailsTabs.vue";
import { formatPrice } from "~/utils";

const { product, currency } = defineProps(["product", "currency"]);

const quantity = ref(1);
</script>

<template>
  <section id="feature-product" p-4 flex flex-col md:flex-row items-center>
    <div flex-1 p-16>
      <img
        src="/images/cover.gif"
        alt="logo"
        class="w-full h-auto object-cover shadow-lg rounded-lg"
      />
      <!-- <div class="absolute top-0 right-0 px-3 py-1.5 text-xs bg-gray-300">
        sale {{ product.sale * 100 }}%
      </div> -->
    </div>
    <div flex-1>
      <div flex flex-col gap-4>
        <div px-3 py-1.5 mr-auto rounded-full text-xs bg-gray-300>
          {{ product.category }}
        </div>

        <h1 text-2xl tracking-wide font-bold>{{ product.title }}</h1>

        <div flex items-center gap-1>
          <template v-for="(r, i) in 5" :key="`star-${i}`">
            <div v-if="i < Math.floor(product.rating)" i-carbon:star-filled />
            <!-- <div i-carbon:star-half /> -->
            <div v-else i-carbon:star />
          </template>
          <span>({{ product.rating }})</span>
          <a class="text-primary">reviews</a>
        </div>

        <div flex items-center gap-3>
          <span :class="product.sale ? 'line-through text-gray' : ''">
            {{ formatPrice(product.price, currency) }}
          </span>
          <span v-if="product.sale" text-xl>
            {{
              formatPrice(
                product.price - product.price * product.sale,
                currency
              )
            }}
          </span>
          <span>{{ currency }}</span>
        </div>

        <div flex flex-col md:flex-row gap-3>
          <div relative flex items-center>
            <button
              @click="quantity--"
              class="text-primary rounded-full aspect-square px-2 border-2"
              :disabled="quantity <= 1"
            >
              <div title="remove" i-carbon:subtract />
            </button>
            <input
              name="quantity"
              v-model="quantity"
              type="number"
              class="flex-1 py-2 px-4 max-w-18"
              autocomplete="off"
              min="1"
              :max="product.stock"
            />
            <button
              @click="quantity++"
              class="text-primary rounded-full aspect-square px-2 border-2"
              :disabled="quantity >= product.stock"
            >
              <div title="add" i-carbon:add />
            </button>
          </div>

          <button
            class="bg-primary text-white rounded-full py-2 px-8"
            :disabled="!!!product.stock"
          >
            <span v-if="product.stock">add to cart</span>
            <span v-else>sold out</span>
          </button>
        </div>

        <ProductDetailsTabs />
      </div>
    </div>
  </section>
</template>
