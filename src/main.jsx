import GlobalStyle from '@/assets/styles/GlobalStyle.js'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme.js'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import App from '@/App.jsx'
import React from 'react'
import ScrollProvider from '@/providers/ScrollProvider.jsx'
import GraphQLProvider from '@/providers/GraphQLProvider.jsx'

WebFont.load({
  google: {
    families: ['Outfit'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ScrollProvider>
        <GraphQLProvider>
          <App />
        </GraphQLProvider>
      </ScrollProvider>
    </ThemeProvider>
  </React.StrictMode>
)
