import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    position: relative;
    font-family: 'Lato', 'sans-serif';
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    margin: 0;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
