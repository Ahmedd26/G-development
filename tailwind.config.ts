import type { Config } from "tailwindcss";

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
                container: "1400px",
            },
        },
    },
    plugins: [],
} satisfies Config;
