import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './App.scss'

import UserList from './components/UserList'

class App extends Component {
  render () {
    return (
      <div>
        <h1 className={classnames(styles.title, styles['title--blue'], 'text-muted')}>Hello World</h1>
        <h2 className='h1 title--red'>Heading 2</h2>
        <h2 className='h2'>Heading 2</h2>
        <h2 className='h3'>Heading 2</h2>
        <p className={styles.desscription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <UserList />
      </div>
    )
  }
}

export default App
