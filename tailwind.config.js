/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
      fontFamily: {
        'sans': ['JetBrains Mono', 'monospace'], // Include JetBrains Mono as the default monospaced font
      },
      fontWeight: {
        '100': 100,
        '200': 200,
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
        '900': 900,
      },
    },
    colors: {
      "bg-color": "rgb(28, 28, 36)",
      "main-fc": "#fdfdfd",
      "Secondary-fc": "#09fdae",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
