import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../components/theme";
import AppBar from "../components/AppBar";
import { useSelector, Provider } from "react-redux";
import store from "../redux/store";

const WrapTheme = (props) => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      {props.children}
    </ThemeProvider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <WrapTheme>
        <AppBar />
        <Component {...pageProps} />
      </WrapTheme>
    </Provider>
  );
}

export default MyApp;
