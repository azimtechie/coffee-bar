/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-theme-color': 'var(--primary-theme-color)',
        'primary-font-color': 'var(--primary-font-color)',
        'secondary-font-color': 'var(--secondary-font-color)',
        'border-color': 'var(--border-color)',
        'place-holder-color': 'var(--place-holder-color)',
        'disable-color': 'var(----disable-color)',
        'danger-color': 'var(--danger-color)',
      },
      margin: {
        "coffe-container": '0px 16px'
      },
      minHeight: {
        'minHeight-layout-web': 'calc(100vh - 200px)',
      },
    },
  },
  important:true,
  plugins: [],
}