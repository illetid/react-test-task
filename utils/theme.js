const lightTheme = {
  primary: "#a30000",
  secondary: "rgb(28,71,28)",
  text: "#1d1d2a",
  background: "#f3dcdc",
  success: "#518604",
  danger: "#721717",
  fontSizeTitle: "21px",
};

const darkTheme = {
  primary: "#ad6363",
  secondary: "rgb(55,64,55)",
  text: "#cec1c1",
  background: "#343030",
  success: "#92c673",
  danger: "#ff8888",
  fontSizeTitle: "21px",
};
const theme = (mode) => (mode === "dark" ? darkTheme : lightTheme);

export default theme;
