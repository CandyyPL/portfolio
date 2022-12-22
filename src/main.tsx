import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import App from '@/App'
import GlobalStyle from '@/assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme'
import ScrollProvider from '@/providers/ScrollProvider'
import Background from '@/components/Background/Background'
import { GraphQLClient, ClientContext } from 'graphql-hooks'

WebFont.load({
  google: {
    families: ['Nunito', 'Source Code Pro', 'Roboto'],
  },
})

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: import.meta.env.VITE_DATOCMS_API_KEY,
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ScrollProvider>
        <Background />
        <ClientContext.Provider value={client}>
          <App />
        </ClientContext.Provider>
      </ScrollProvider>
    </ThemeProvider>
  </React.StrictMode>
)
