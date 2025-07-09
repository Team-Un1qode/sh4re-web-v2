import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProviderCustom, useTheme, themes } from "@sh4re/theme";
import { ToastProvider } from "@sh4re/utils";
import { ToastContainer } from "@sh4re/ui";
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
