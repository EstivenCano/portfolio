import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
