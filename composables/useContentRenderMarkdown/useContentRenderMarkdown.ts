// @ts-expect-error avoid lint error
import markdownParser from "@nuxt/content/transformers/markdown";

export function useContentRenderMarkdown(markdownString: string) {
  const record = ref(null);

  watch(
    () => markdownString,
    async () => {
      record.value = await markdownParser.parse("customId", markdownString);
      //.then((md: string) => (record.value = md));
    },
    { immediate: true }
  );

  return { record };
}
