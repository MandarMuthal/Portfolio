export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#08090f", panel: "#0f1119", line: "#232638", mist: "#9aa1b9", glow: "#8b9cff", aqua: "#5eead4" },
      fontFamily: { display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"], sans: ["Inter", "system-ui", "sans-serif"], mono: ['"JetBrains Mono"', "monospace"] },
    },
  },
  plugins: [],
};
