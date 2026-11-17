import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12151b",
          soft: "#4b5563",
          faint: "#6b7280",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f5f6f8",
          border: "#e7e9ee",
        },
        brand: {
          50: "#eef4fc",
          100: "#d9e7f9",
          200: "#b3d0f3",
          300: "#82b2e8",
          400: "#4f8cd6",
          500: "#2568bf",
          600: "#1a4f99",
          700: "#153e78",
          800: "#0f2c56",
          900: "#0a1c38",
        },
        signal: {
          green: "#1e8f5e",
          amber: "#b7791f",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(18, 21, 27, 0.04), 0 8px 24px -12px rgba(18, 21, 27, 0.12)",
        card: "0 1px 1px rgba(18, 21, 27, 0.03), 0 2px 8px rgba(18, 21, 27, 0.06)",
        lift: "0 12px 32px -16px rgba(18, 21, 27, 0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s ease both",
        float: "float 5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
