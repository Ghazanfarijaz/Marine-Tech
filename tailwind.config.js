module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#004466",
        primary: "#006699",
        "primary-light": "#0099cc",
        secondary: "#00ccff",
        accent: "#66ffff",
        dark: "#001a33",
        light: "#e6f9ff",
        "gray-light": "#f0f7fa",
        gray: "#7a8b99",
        "text-dark": "#002233",
        "text-light": "#e6f9ff",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2.5rem",
        xxl: "4rem",
      },
    },
  },
  plugins: [],
};
