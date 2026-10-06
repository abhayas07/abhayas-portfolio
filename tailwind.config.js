const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const svgToDataUri = (svgString) => {
  const body = svgString.trim().replace(/\s+/g, " ").replace(/"/g, "'");
  const dataUri = "data:image/svg+xml," + encodeURIComponent(body);
  return dataUri.replace(/ /g, "%20");
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F7F5",
        ink: "#0E2219",
        django: { DEFAULT: "#0C4B33", deep: "#07271D", soft: "#DCEBE3" },
        py: { yellow: "#F2C14E", blue: "#3776AB" },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.97)" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
