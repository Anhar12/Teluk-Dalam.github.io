/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html', 
    'profil.html', 
    'transparasi.html', 
    'pemerintahan.html', 
    'informasi.html', 
    'potensi.html', 
    'berita.html', 
    'agenda.html',
    'inovasi-desa',
    'potensi-desa'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#38bdf8',
        dark: '#1f2937',
        light: '#6b7280'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

