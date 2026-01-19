/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        dark: '#1f2937',
      },
    },
  },
  plugins: [],
}
