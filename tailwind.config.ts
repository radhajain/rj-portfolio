import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--color-background)",
        "text-color": "var(--color-text)",
        secondary: "var(--color-secondary)", 
      }
    },
  },
  plugins: [],
} satisfies Config;
