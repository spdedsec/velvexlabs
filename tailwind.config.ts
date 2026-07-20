import type { Config } from "tailwindcss";

/**
 * Design tokens for Velvex Labs.
 * Every color, type role, and spacing step used across the site
 * traces back to this file. Do not hardcode hex values in components.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-ink-muted) / <alpha-value>)",
        },
        rule: "rgb(var(--color-rule) / <alpha-value>)",
        walnut: {
          DEFAULT: "rgb(var(--color-walnut) / <alpha-value>)",
          light: "rgb(var(--color-walnut-light) / <alpha-value>)",
          dark: "rgb(var(--color-walnut-dark) / <alpha-value>)",
        },
        sage: "rgb(var(--color-sage) / <alpha-value>)",
        "sage-muted": "rgb(var(--color-sage-muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-instrument)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      fontSize: {
        // Editorial type scale — generous leaps, not the default 4/8pt web scale.
        "display-xl": ["clamp(3.5rem, 7vw, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 5vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.2vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.65" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        caption: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      maxWidth: {
        prose: "42rem",
        rail: "16rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
