import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        syanor: {
          emerald: "#063F33",
          royal: "#022B24",
          ink: "#10231F",
          gold: "#C9A24A",
          "gold-soft": "#D6B15E",
          champagne: "#F5E8C7",
          ivory: "#FFF9ED",
          pearl: "#FAF4E8",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["1.375rem", { lineHeight: "1.3", fontWeight: "600" }],
      },
      boxShadow: {
        card: "0 4px 24px rgba(6,63,51,0.07)",
        "card-hover": "0 8px 32px rgba(6,63,51,0.13)",
        gold: "0 0 40px rgba(201,162,74,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        float: "float 7s ease-in-out infinite",
        spinSlow: "spin 26s linear infinite",
        drawLine: "drawLine 2.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
