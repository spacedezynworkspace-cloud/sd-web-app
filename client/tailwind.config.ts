import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F19645",
        },
        green: {
          DEFAULT: "#4F6D56",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
        raleway: ["var(--font-raleway)"],
        manrope: ["var(--font-manrope)"],
        dmsans: ["var(--font-dmsans)"],
      },
    },
  },
  plugins: [],
};
export default config;
