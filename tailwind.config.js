/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-darker": "var(--primary-darker)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
