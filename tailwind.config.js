/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./resume.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        surface: "#050810",
        "surface-alt": "#0a0f14",
        "surface-border": "#112218",
        text: "#e8e8e8",
        "text-muted": "#88aa99",
        accent: "#44ffaa",
        "accent-dim": "#00cc77",
      },
      fontFamily: {
        sans: ['"Josefin Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
