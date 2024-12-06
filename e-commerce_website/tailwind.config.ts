import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      },
      colors: {
        primary: "#fff",
        primary1: "#363738",
        secondary: "#f5f5f5",
        secondary1: "#fefaf1",
        secondary2: "#db4444",
        text: "#fafafa",
        text1: "#fafafa",
        text2: "#000000",
        button1: "#00ff66",
        button2: "#db4444",
        hover_red: "#e07575",
        hover_blue: "#a0bce0",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
