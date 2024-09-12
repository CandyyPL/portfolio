import '@/assets/styles/GlobalStyle.scss'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import App from '@/App.jsx'
import React from 'react'

WebFont.load({
  google: {
    families: ['Outfit'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
