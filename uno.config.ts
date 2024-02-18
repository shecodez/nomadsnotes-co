import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  shortcuts: [
    ["center", "flex items-center justify-center"],
    ["center-flex-2", "flex gap-2 items-center"],
    ["btn", "py-2 px-4 flex items-center justify-center gap-1"],
    ["btn-icon", "aspect-square px-4 h-auto"],
    ["btn-primary", " bg-primary text-white hover:bg-white hover:text-primary"],
    ["pg-border", "border-black border-20"],
    ["pg-border-t", "border-t-black border-t-20"],
    ["pg-border-x", "border-x-black border-x-20"],
    ["pg-bg-color", "bg-slate-2"],
  ],
  presets: [
    presetUno(), // required
    presetAttributify(), // required when using attributify mode
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(), // https://unocss.dev/presets/typography
    presetWebFonts({
      fonts: {
        // these will extend the default theme
        sans: "Roboto",
        mono: ["Fira Code", "Fira Mono:400,700"],
        // custom fonts
        brand: "Major Mono Display",
        cursive: "Comforter", // "Fuggles"
        statement: "Fredericka the Great",
      },
    }), // https://unocss.dev/presets/web-fonts
  ],
  theme: {
    colors: {
      primary: "#ff004f",
    },
  },
});
