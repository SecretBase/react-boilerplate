import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const main = MainApp => {
  render(
    <AppContainer>
      <MainApp />
    </AppContainer>,
    document.getElementById('app')
  )
}

main(App)

if (module.hot) {
  module.hot.accept('./App', () => { main(App) })
}
