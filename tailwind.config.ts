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
        'custom-brown': '#573a1e',
        'sage': '#b8b08D'
      }
    },
  },
  plugins: [],
} satisfies Config;
