/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "very-light-gray-background-light": "#fafafa",
        "dark-blue-elements-dark": "hsl(209, 23%, 22%)",
        "very-dark-blue-background-dark": "hsl(207, 26%, 17%)",
        "very-dark-blue-text-light": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "white-color": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
