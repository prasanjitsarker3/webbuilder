import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#824EEB",
          light: "#6366F1",
          dark: "#3730A3"
        },
        backgroundImage: {
          'gradient-purple': "linear-gradient(180deg, #F9F5FF 0%, #F3EEFF 100%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
