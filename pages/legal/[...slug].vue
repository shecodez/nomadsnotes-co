<script setup>
import TableOfContents from "@/components/app/TableOfContents.vue";
</script>

<template>
  <div class="pg-bg-color mx-10 mb-10 p-10">
    <div flex gap-10>
      <content-doc>
        <template #default="{ doc }">
          <div
            v-if="!!doc.body?.toc?.links.length"
            class="w-80 hidden md:block mt-5"
          >
            <div sticky top-40>
              <TableOfContents :links="doc.body?.toc?.links" />
            </div>
          </div>

          <article prose>
            <content-renderer :value="doc">
              <template #empty>
                <p>No content found.</p>
              </template>
            </content-renderer>
          </article>
        </template>
        <template #not-found>
          <p>No content found.</p>
        </template>
      </content-doc>
    </div>
  </div>
</template>
