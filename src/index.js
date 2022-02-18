import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './styles/index.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import PageProvider from './contexts/PageProvider.jsx'

ReactDOM.render(
  <React.StrictMode>
    <PageProvider>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </PageProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
