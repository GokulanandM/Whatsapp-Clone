/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      'chat-pattern:': "url('/public/Whatsappbg.jpg')"
    },
    colors: {
      Wgreen: '#25D366',
      white: '#ffffff',
      teal: '#128C7E',
      tealdark: '#075E54',
      blue: '#34B7F1',
      gray300: '#d1d5db',
      gray500:'#6b7280',
      gray700:'#374151',
      gray800:'#1f2937',
      gray900:'#111827'
    },
  },
  plugins: [require("daisyui")],
}