module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["'Montserrat'", "sans-serif"],
        Oswald: ["'Oswald'", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "retro", "cupcake", "bumblebee", "cyberpunk"],
  },
  plugins: [require("daisyui")],
};
