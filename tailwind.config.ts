import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#050505", panel: "#101010", paper: "#F5F5F5", silver: "#C0C0C0", steel: "#8A8A8A" },
    fontFamily: { display: ["var(--f-display)"], serif: ["var(--f-serif)"] },
  } },
} satisfies Config;
