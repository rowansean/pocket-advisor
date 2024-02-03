/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'pink-primary': '#FABCFF',
        'pink-secondary': '#EB00FF',
        'blue-primary': '#7FB2FF',
        'blue-secondary': '#0047FF',
        'green-primary': '#9BE7A7',
        'green-secondary': '#00D923',
        'yellow-primary': '#FFD97D',
        'yellow-secondary': '#FFA800',
      },
    },
  },
  plugins: [],
};
