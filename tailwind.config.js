/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(max-height: 800px)" },
      },
      colors: {
        primary: "var(--color-primary)",
        "light-gray": "var(--color-light-gray)",
        danger: "var(--color-danger)",
      },
    },
  },
  plugins: [],
};
