/** @type {import('tailwindcss').Config} */

const generateTailwindColorCombinations = (colors) => {
  const shades = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];
  const variants = ["bg", "text", "border", "fill"];
  const modifiers = ["", "hover:", "dark:"];
  const dirs = ["", "-t", "-b", "-r", "-l"];

  const combinations = [];

  colors.forEach((color) => {
    shades.forEach((shade) => {
      variants.forEach((variant) => {
        modifiers.forEach((modifier) => {
          dirs.forEach((dir) => {
            combinations.push(`${modifier}${variant}${dir}-${color}-${shade}`);
          });
        });
      });
    });
  });

  return combinations;
};

export default {
  darkMode: "selector",
  safelist: generateTailwindColorCombinations([
    "blue",
    "green",
    "pink",
    "yellow",
    "amber",
    "red",
    "purple",
    "orange",
    "zinc",
    "teal",
    "indigo",
    "lime",
    "cyan",
  ]),
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        stone: {
          920: "#141210",
        },
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
      boxShadow: {
        "custom-red": "-12px -12px 0px 4px #6d0ac4",
      },
    },
  },
  plugins: [],
};
