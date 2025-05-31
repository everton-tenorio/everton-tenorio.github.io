// File: tailwind.config.js (project root)

module.exports = {
  darkMode: 'false',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './content/**/*.{md,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif']
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
