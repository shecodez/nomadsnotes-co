<script setup>
import TableOfContents from "~/components/TableOfContents.vue";
</script>

<template>
  <div container mx-auto py-10>
    <div flex gap-8>
      <content-doc>
        <template #default="{ doc }">
          <aside v-if="!!doc.body?.toc?.links.length" w-80 hidden md:block>
            <div sticky top-24>
              <TableOfContents :links="doc.body?.toc?.links" />
            </div>
          </aside>

          <article prose>
            <content-renderer :value="doc">
              <template #empty>
                <p>No content found.</p>
              </template>
            </content-renderer>
          </article>
        </template>
      </content-doc>
    </div>
  </div>
</template>
