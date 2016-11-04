import React, { PureComponent } from 'react'
import styles from './UserList.scss'

class UserList extends PureComponent {
  render () {
    return (
      <ul className={styles.list}>
        <li className={styles.item}>User 1</li>
        <li className={styles.item}>User 2</li>
        <li className={styles.item}>User 3</li>
      </ul>
    )
  }
}

export default UserList
