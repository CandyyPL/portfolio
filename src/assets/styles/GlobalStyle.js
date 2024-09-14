import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;

    overflow-x: hidden !important;

    font-family: 'Outfit', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  .text-accent {
    color: ${({ theme }) => theme.colors.yellow};;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.bg};
  }

  ::-webkit-scrollbar-thumb {
    background-color: #444;

    border: 6px solid transparent;
    border-radius: 10px;

    background-clip: content-box;
  }
`

export default GlobalStyle
