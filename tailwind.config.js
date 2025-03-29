/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav_and_Sidebar_Color: "#101010",
        text_Color: "#6DD9D3",
        accent_Color: "#050714",
        card_Shadow: "rgba(0, 0, 0, 0.1)",
        icons_Color: "#595858",
        body_Color: "#2C2C2C",
      },
    },
    fontFamily: {
      fontPoppins: "Poppins, sans-serif",
      fontRoboto: "Roboto, sans-serif",
      fontWorkSans: "Work Sans, sans-serif",
    },
  },
  plugins: [],
};
