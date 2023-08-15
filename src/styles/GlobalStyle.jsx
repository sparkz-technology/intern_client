import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    }
    body ::-webkit-scrollbar {
  display: none !important;
}
    `;
export default GlobalStyle;
