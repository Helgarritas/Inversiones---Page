/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#f5cb1f', // Color para modo oscuro
        colorHover: '#e5b10d', // Color para modo oscuro
        colorBackground: '#f9de4b', // Color para modo oscuro
        contPrimary: 'rgba(255, 255, 255, 0.9)', // Color para modo oscuro
        contSecondary: 'rgba(255, 255, 255, 0.65)', // Color para modo oscuro
        contTerceary: 'rgba(255, 255, 255, 0.45)', // Color para modo oscuro
        bgPrimary: '#121212', // Color para modo oscuro
        bgSecondary: '#1A1A1A', // Color para modo oscuro
        bgContain: 'rgba(255, 255, 255, 0.1)', // Color para modo oscuro
        bgContainHover: 'rgba(255, 255, 255, 0.15)', // Color para modo oscuro
        bgBorder: 'rgba(255, 255, 255, 0.2)', // Color para modo oscuro
      },
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Roboto'],
        serif: ['Merriweather', 'serif'],
      },
      aspectRatio: {
        '3/2': '1.5',  // 3/2 es 1.5
        '2/3': '0.666', // 2/3 es aproximadamente 0.666
        '3/4': '0.75',  // 3/4 es 0.75
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
}
