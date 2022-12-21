import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: #111a24;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #444;

    border: 6px solid transparent;
    border-radius: 10px;

    background-clip: content-box;
  }
`

export default GlobalStyle
