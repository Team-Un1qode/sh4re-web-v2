import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProviderCustom, useTheme, themes } from "./theme/themeContext";
import Router from "./Router";
import { useInitUser } from "./hooks/auth/useUserInit";

function ThemedApp() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

function App() {
  const { isLoading } = useInitUser(); // 유저 정보 초기 로딩
  if (isLoading) return <div>로딩 중...</div>;
  return (
    <ThemeProviderCustom>
      <ThemedApp />
    </ThemeProviderCustom>
  );
}

export default App;
