import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: "var(--font-helvetica-now), sans-serif",
      },
      maxWidth: {
        container: "1368px",
      },
      colors: {
        "design-gray": "#777777",
      },
    },
  },

  plugins: [scrollbarHide],
} satisfies Config;
