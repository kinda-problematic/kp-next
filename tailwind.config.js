/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        "glowy-dark": "15px 15px 15px rgba(255, 255, 205, 0.25)",
        "glowy-sm": "15px 15px 15px rgba(255, 255, 205)",
        "glowy-sm-l": "0px 15px 15px rgba(255, 255, 200)",
        "glowy-md": "20px 20px 20px rgba(255, 245, 225)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: "#ccff00",
        kpblack: colors.black,
        kpWhite: colors.white,
        kpgray: "#353839",
        kpNatural: "#FEFBEA",
        kpPink: "#f36196",
        iconic: "#00E5EE",
        kpLightGray: "#6a6a6a",
        kpPeach: "#DEB1A6",
        kpCharcoal: "#414141",
        kpBanner: "#ff0000",
        babyBlue: "#89CFF0",
      },
      backgroundImage: {
        sm: "linear-gradient(60deg, #00e5ee, #f36196, #5e5687)",
        sm2: "linear-gradient(60deg, #00e5ee, #f36196, #5e5687, #5e5687)",
        itm: "radial-gradient(#f36196, #5e5687, #f36196)",
        itm2: "radial-gradient(#5e5687, #f36196, #5e5687)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "gradient-shift-surf": {
          "0%, 100%": {
            background: "linear-gradient(45deg, #66CCCC 0%, #00CCFF 100%)",
          },
          "25%, 75%": {
            background: "linear-gradient(45deg, #66CCCC 50%, #00CCFF 50%)",
          },
          "50%": {
            background: "linear-gradient(45deg, #00CCFF 0%, #66CCCC 100%)",
          },
        },
        "color-pulse": {
          from: { backgroundSize: "100% 100%" },
          to: { backgroundSize: "110% 110%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        surfing: "gradient-shift-surf 10s ease-in-out infinite alternate",
        "bg-pulse": "color-pulse 1s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
