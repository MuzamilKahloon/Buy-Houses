// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["'Source Sans 3'", "system-ui", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    extend: {//custom color
      colors: {
        darkGray: "#212529", 
        footertag:"#0C669F",
        footertags:"#0A507D"
       
      },
    },
  },
  plugins: [],
};
