import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProviderCustom, useTheme, themes } from "./theme/themeContext";
import { ToastProvider } from "./contexts/ToastContext";
import ToastContainer from "./components/common/toast";
import Router from "./Router";

function ThemedApp() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <ToastProvider>
        <Router />
        <ToastContainer />
      </ToastProvider>
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
