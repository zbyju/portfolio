/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          100: "#FF7F50",
          200: "#dd6236",
          300: "#8f1e00",
        },
        secondary: {
          300: "#ffd299",
          800: "#8B4513",
        },
        text: {
          800: "#2c2c2c",
          900: "#000000",
        },
        primary: {
          100: "#F7EEDD",
          200: "#ede4d3",
          300: "#c4bcab",
        },
      },
    },
  },
  plugins: [],
};
