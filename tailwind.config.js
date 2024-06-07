/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'border-spin': 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '960px',
          xl: '1200px',
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
      colors: {
        "gray-color": "#2b2a33",
        "bg-color": "rgb(28, 28, 36)",
        "main-fc": "#fdfdfd",
        "Secondary-fc": "#41C9E2",
      },
      width: {
        "47": '47%',
        "w23": '23%',
        "w60": '55%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
