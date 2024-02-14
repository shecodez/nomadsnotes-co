// @ts-expect-error
import markdownParser from "@nuxt/content/transformers/markdown";

export const parseMarkdown = (md: string) =>
  markdownParser.parse("custom.md", md);

export const formatPrice = (price: number, currency = "USD"): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(price);

// DD. MMM YYYY -> 29. FEB 2000
export const formatDate = (date: Date, locale = "en-GB"): string =>
  new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);

// https://docs.netlify.com/forms/setup/#submit-javascript-rendered-forms-with-ajax
export const encode = (data: any) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
