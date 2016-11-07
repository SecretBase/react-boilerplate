import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.min.css'

import './globalStyle/global.scss'

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
