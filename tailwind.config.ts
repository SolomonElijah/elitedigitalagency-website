import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        black:   "#080810",
        surface: "#111120",
        mid:     "#1a1a2e",
        accent:  "#00e5b0",
        violet:  "#7b5cfa",
        white:   "#f5f5f0",
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "float":     "float 6s ease-in-out infinite",
        "float-slow":"float 9s ease-in-out infinite",
        "spin-slow":  "spinSlow 20s linear infinite",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { opacity: "1",   transform: "scale(1)" },
          "50%":      { opacity: "0.4", transform: "scale(1.5)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;