import type { Config } from "tailwindcss";

const oklchVar = (name: string) => `oklch(var(${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: oklchVar("--background"),
        foreground: oklchVar("--foreground"),
        card: {
          DEFAULT: oklchVar("--card"),
          foreground: oklchVar("--card-foreground"),
        },
        popover: {
          DEFAULT: oklchVar("--popover"),
          foreground: oklchVar("--popover-foreground"),
        },
        muted: {
          DEFAULT: oklchVar("--muted"),
          foreground: oklchVar("--muted-foreground"),
        },
        border: oklchVar("--border"),
        input: oklchVar("--input"),
        ring: oklchVar("--ring"),
        primary: {
          50: oklchVar("--primary-50"),
          100: oklchVar("--primary-100"),
          200: oklchVar("--primary-200"),
          300: oklchVar("--primary-300"),
          400: oklchVar("--primary-400"),
          500: oklchVar("--primary-500"),
          600: oklchVar("--primary-600"),
          700: oklchVar("--primary-700"),
          800: oklchVar("--primary-800"),
          900: oklchVar("--primary-900"),
          DEFAULT: oklchVar("--primary"),
          foreground: oklchVar("--primary-foreground"),
        },
        secondary: {
          50: oklchVar("--secondary-50"),
          100: oklchVar("--secondary-100"),
          200: oklchVar("--secondary-200"),
          300: oklchVar("--secondary-300"),
          400: oklchVar("--secondary-400"),
          500: oklchVar("--secondary-500"),
          600: oklchVar("--secondary-600"),
          700: oklchVar("--secondary-700"),
          800: oklchVar("--secondary-800"),
          900: oklchVar("--secondary-900"),
          DEFAULT: oklchVar("--secondary"),
          foreground: oklchVar("--secondary-foreground"),
        },
        accent: {
          50: oklchVar("--accent-50"),
          100: oklchVar("--accent-100"),
          200: oklchVar("--accent-200"),
          300: oklchVar("--accent-300"),
          400: oklchVar("--accent-400"),
          500: oklchVar("--accent-500"),
          600: oklchVar("--accent-600"),
          700: oklchVar("--accent-700"),
          800: oklchVar("--accent-800"),
          900: oklchVar("--accent-900"),
          DEFAULT: oklchVar("--accent"),
          foreground: oklchVar("--accent-foreground"),
        },
        neutral: {
          50: oklchVar("--neutral-50"),
          100: oklchVar("--neutral-100"),
          200: oklchVar("--neutral-200"),
          300: oklchVar("--neutral-300"),
          400: oklchVar("--neutral-400"),
          500: oklchVar("--neutral-500"),
          600: oklchVar("--neutral-600"),
          700: oklchVar("--neutral-700"),
          800: oklchVar("--neutral-800"),
          900: oklchVar("--neutral-900"),
        },
        success: {
          light: oklchVar("--success-light"),
          DEFAULT: oklchVar("--success"),
          dark: oklchVar("--success-dark"),
          foreground: oklchVar("--success-foreground"),
        },
        warning: {
          light: oklchVar("--warning-light"),
          DEFAULT: oklchVar("--warning"),
          dark: oklchVar("--warning-dark"),
          foreground: oklchVar("--warning-foreground"),
        },
        error: {
          light: oklchVar("--error-light"),
          DEFAULT: oklchVar("--error"),
          dark: oklchVar("--error-dark"),
          foreground: oklchVar("--error-foreground"),
        },
        info: {
          light: oklchVar("--info-light"),
          DEFAULT: oklchVar("--info"),
          dark: oklchVar("--info-dark"),
          foreground: oklchVar("--info-foreground"),
        },
        destructive: {
          DEFAULT: oklchVar("--destructive"),
          foreground: oklchVar("--destructive-foreground"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        h3: ["1.875rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "650" }],
        h4: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "650" }],
        h5: ["1.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "650" }],
        h6: ["1.125rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "650" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        tiny: ["0.8125rem", { lineHeight: "1.4" }],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 8px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        // Premium “dashboard” shadows (soft outer + subtle inner highlight)
        soft:
          "0 1px 0 oklch(1 0 0 / 0.06) inset, 0 1px 2px oklch(0 0 0 / 0.22), 0 12px 28px oklch(0 0 0 / 0.22)",
        card:
          "0 1px 0 oklch(1 0 0 / 0.06) inset, 0 0 0 1px oklch(0 0 0 / 0.18), 0 18px 50px oklch(0 0 0 / 0.30)",
        inset:
          "0 1px 0 oklch(1 0 0 / 0.06) inset, 0 -1px 0 oklch(0 0 0 / 0.22) inset",
        focus: "0 0 0 4px oklch(var(--ring) / 0.25)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          from: { transform: "translateY(-8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 160ms ease-out",
        "slide-up": "slide-up 220ms ease-out",
        "slide-down": "slide-down 220ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;


