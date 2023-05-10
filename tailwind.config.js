/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "inter": ["Inter", "sans-serif"]
    }
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff3811",
          secondary: "#737373",
          accent: "#ff3811",
          neutral: "#151515",
          "base-100": "#ffffff"
        }
      }
    ]
  }
}

