import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: var(--background);
    color: #FFF;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--blue-200);
    border-radius: 10px;
  }

  :root {
    --background: #02030A;
    --orange-900: #C10C00;
    --orange-200: #FF7235; 
    --blue-200: #007FF4;
    --gray-300: #C3C3C3;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`
