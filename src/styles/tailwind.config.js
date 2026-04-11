/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // Định nghĩa các bước chuyển động
      keyframes: {
        zoom: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      // Tạo ra tên Class để sử dụng
      animation: {
        "view-zoom": "zoom 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
