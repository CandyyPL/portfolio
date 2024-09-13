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

  body {
    &.nav-active {
      height: 100vh;
    }
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
`

export default GlobalStyle
