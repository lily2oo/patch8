import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens:{
        fonts:{
          brandonGrotesque:{value: "brandon-grotesque, sans-serif"},
          hiragino:{value: "hiragino-kaku-gothic-pron, sans-serif"},
        }
      },
      breakpoints: {
        sm: '390px',
        md: '420px',
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
