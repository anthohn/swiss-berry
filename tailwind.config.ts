import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: { // Couleur de fond 
          light : "#f0f0f0",
          dark: "#000000",
        },
        fadebackgroud: { // Couleur de fond ombre
          light: '#3B4297', 
          dark: '#3B4297',
        },
        primary: {  // Couleur de texte primaire
          light: '#000000', 
          dark: '#f0f0f0',
        },
        secondary : {  // Couleur de texte secondaire
          light: '#1F2937',
          dark: '#9CA3AF',
        },
        btnBackground: { // Couleur de fond du bouton
          light: '#3B4297',
          dark: '#3B4297',
        },
        check: { // Couleur de fond du check
          light: '#26823d',
          dark: '#26823d',
        },
        uncheck: {
          light: '#d1d5db',
          dark: '#d1d5db',
        }
      }
    },
  },
  plugins: [],
};
export default config;
