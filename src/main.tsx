import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import App from '@/App'
import GlobalStyle from '@/assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme'

WebFont.load({
  google: {
    families: ['Nunito', 'Source Code Pro', 'Roboto'],
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
