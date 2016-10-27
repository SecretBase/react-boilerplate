import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './App.scss'

class App extends Component {
  render () {
    return (
      <div className='some-className'>
        <h1 className={classnames(styles.title, styles['title--blue'])}>Hello World</h1>
      </div>
    )
  }
}

export default App
