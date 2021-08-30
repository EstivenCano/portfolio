import { createTheme } from "@material-ui/core/styles";

const typography = {
  fontFamily: ["MontserratAlternates", "Merienda", "Roboto"].join(","),
  h1: {
    fontFamily: "Merienda",
  },
};

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#F0E6D6",
      light: "#F1EAB0",
      dark: "#BAA88A",
    },
    secondary: {
      main: "#F9B384",
      light: "#F8D7C2",
      dark: "#AC8B75",
    },
    neutral: {
      main: "#CA5116",
      light: "#D9855B",
      dark: "#8d380f",
    },
    darker: {
      main: "#581C0C",
      light: "#79493C",
      dark: "#341007",
    },
    mode: "light",
  },
  typography: {
    ...typography,
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#1B1F3A",
      light: "#484B61",
      dark: "#15182E",
    },
    secondary: {
      main: "#53354A",
      light: "#755D6E",
      dark: "#422A3B",
    },
    neutral: {
      main: "#A64942",
      light: "#C07F7A",
      dark: "#74332E",
    },
    darker: {
      main: "#FF7844",
      light: "#FFA07C",
      dark: "#B2542F",
    },
    mode: "dark",
  },
  typography: {
    ...typography,
  },
});
