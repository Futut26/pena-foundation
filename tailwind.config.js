/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: ["light"],

  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#014069",
            "secondary": "#4DBAFF",
            "accent": "#e263b6",
            "neutral": "#1c1d2b",
            "base-100": "#f6f8f9",
            "info": "#3b5bc4",
            "success": "#1bac8d",
            "warning": "#f7b064",
            "error": "#da402f",
            "danger": "#FF0000",
        },
      },
    ],
  },
  
  plugins: [require('daisyui')],


};
