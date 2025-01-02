/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2BD17E",
        "primary-light": "#224957",
        "primary-darker": "#092C39",
        secondary: "#093545",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
