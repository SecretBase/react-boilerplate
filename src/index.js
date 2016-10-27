import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './global.css'

import App from './App'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    let App = require('./App').default
    render(
      <AppContainer>
        <App />
      </AppContainer>,
       document.getElementById('app')
     )
  })
}
