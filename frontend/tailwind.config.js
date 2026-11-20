/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          950: '#06070a',
          900: '#0b0d12',
          850: '#10131a',
          800: '#161a24',
          700: '#222838',
          600: '#333b52',
          cyan: '#00f2fe',
          violet: '#7928ca',
          amber: '#f5a623',
          crimson: '#ff0055',
          green: '#00df8f'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
