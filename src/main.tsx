import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import App from '@/App'
import GlobalStyle from '@/assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme'
import ScrollProvider from '@/providers/ScrollProvider'

WebFont.load({
  google: {
    families: ['Nunito', 'Source Code Pro', 'Roboto'],
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ThemeProvider>
  </React.StrictMode>
)
