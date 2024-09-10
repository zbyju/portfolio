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
    "sky",
    "green",
    "pink",
    "yellow",
    "red",
    "teal",
    "indigo",
    "cyan",
    "vitage",
    "myblue",
    "myteal",
    "mygreen",
  ]),
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        vintage: {
          50: "#FFFAEF",
          100: "#F7ECD4",
          200: "#E7D5AD",
          300: "#C7B07F",
          400: "#A98E54",
          500: "#856A2F",
          600: "#3B2903",
          700: "#1B1200",
          800: "#130D00",
          900: "#0A0002",
        },
        stone: {
          920: "#141210",
        },
        myblue: {
          50: "#f4f4f7",
          100: "#caced9",
          200: "#a0a7bb",
          300: "#76819e",
          400: "#4c5a80",
          500: "#233463",
          600: "#1c294f",
          700: "#151f3b",
          800: "#0e1427",
          900: "#060a13",
        },
        myteal: {
          50: "#f2f9f8",
          100: "#c1e3df",
          200: "#91cdc5",
          300: "#60b7ac",
          400: "#30a193",
          500: "#008b7a",
          600: "#006f61",
          700: "#005349",
          800: "#003730",
          900: "#001b18",
        },
        mygreen: {
          50: "#fafdf9",
          100: "#e7f9e2",
          200: "#d5f5cb",
          300: "#c3f1b5",
          400: "#b1ed9e",
          500: "#9fea88",
          600: "#7fbb6c",
          700: "#5f8c51",
          800: "#3f5d36",
          900: "#1f2e1b",
        },
        accent: {
          700: "#233463",
          500: "#008b7a",
          300: "#9fea88",
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
  plugins: [require("@tailwindcss/typography")],
};
