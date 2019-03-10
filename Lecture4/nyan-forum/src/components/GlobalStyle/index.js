import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	  html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-size: 62.5%;
      font-family: 'NanumSquare', sans-serif !important;
      background-color: #f9f9f9;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
      -o-font-smoothing: antialiased;
      font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    div {
      box-sizing: border-box;
    }
    #root {
      height: 100%;
    }

    #root > div {
      height: 100%;
    }
`;

export default GlobalStyle;