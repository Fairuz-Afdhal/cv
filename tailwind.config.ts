import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      screens: {
        print: { raw: "print" }
      }
    },
  },
  plugins: [],
} satisfies Config;
