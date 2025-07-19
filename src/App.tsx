import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProviderCustom, useTheme, themes } from "./theme/themeContext";
import Router from "./router";
import CustomToastContainer from "./components/toast/CustomToast";

function ThemedApp() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Router />
      <CustomToastContainer />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeProviderCustom>
      <ThemedApp />
    </ThemeProviderCustom>
  );
}

export default App;
