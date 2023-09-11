/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'pink-grayish': 'hsl(303, 10%, 53%)',
        'soft-pink':'hsl(333, 80%, 67%)',
      }
    },
  },
  plugins: [],
}

