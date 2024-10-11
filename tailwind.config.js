/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // clipPath: {
      //   'custom-slant': 'polygon(0 0, 100% 0, 100% 75%, 0 100%)',
      // }
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography')
  ],
}

