/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {

        blueish: {
          100: "#e7eefd",
          200: "#b7cdf8",
          300: "#8aabf1",
          400: "#4876e3",
          500: "#1d4ed8",
          600: "#1843bc",
          700: "#1338a0",
        },
        yellowish: {
          100: "#fee8d8",
          200: "#fbc49d",
          300: "#f7ac74",
          400: "#f29345",
          500: "#ef8624",
          600: "#d0741e",
          700: "#b16218",
        },
        // yellowish: {
        //   100: "#f8feee",
        //   200: "#e3fbba",
        //   300: "#d6f893",
        //   400: "#c8f566",
        //   500: "#bbf109",
        //   600: "#a2d207",
        //   700: "#8ab305",
        // },
        blackish: {
          100: "#e6e6e6",
          200: "#747472",
          300: "#4b4b49",
          400: "#373735",
          500: "#1f1f1d",
          600: "#1f1f1d",
          700: "#191917",
        },
        whiteish: {
       
          300: "#fefefe",
          400: "#fcfcfc",
          500: "#f1f1f1",
          600: "#d2d2d2",
          700: "#b3b3b3",
    
        },

    

      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        sourceSarif: ["var(--font-SourceSarif4)"],
        manrope: ["var(--font-manrope)"],
        inter: ["var(--font-inter)"],
        Bebas: ["var(--font-Bebas)"],
      },
    },
  },
  plugins: [],
};
