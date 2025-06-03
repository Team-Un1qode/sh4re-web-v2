import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.main};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default GlobalStyles;
