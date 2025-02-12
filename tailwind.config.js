/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "lg-md": "1100px", // custom breakpoint for 1100px
      },
    },
  },
  plugins: [],
};
