/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0a',        // Fundo principal (quase preto)
          surface: '#141414',   // Cards e superfícies
          border: '#2a2a2a',    // Bordas sutis
          accent: '#c8a96e',    // Dourado/champagne — cor de destaque
          text: '#f0f0f0',      // Texto principal
          muted: '#888888',     // Texto secundário/muted
        }
      }
    },
  },
  plugins: [],
}
