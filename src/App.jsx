// @flow
import React, { PureComponent } from 'react'

import MoiveList from './components/MoiveList'
import type {Moives} from './components/MoiveList'
import Input from './components/Input'

type Props = {}
type State = {
  moives: Moives,
  query: string
}

export const getMoives = (): Moives => [
  {
    name: 'Spider Man',
    emoji: '🕷 👦🏻'
  },
  {
    name: 'Frozen',
    emoji: '❄️ 👗'
  },
  {
    name: 'Cars 3',
    emoji: '🚘 🚘 🚘'
  },
  {
    name: 'Frozen 2',
    emoji: '❄️ 👗 ✌️'
  },
  {
    name: 'Harry Potter',
    emoji: '👦🏻 👓 ⚡️'
  }
]

class App extends PureComponent<Props, State> {
  state = {
    moives: getMoives(),
    query: ''
  }

  filterMovies = () => {
    this.setState(() => {
      return {
        moives: getMoives()
      }
    })
  }

  onChange = (event: Event) => {
    const {target} = event
    if (!(target instanceof global.HTMLInputElement)) return
    this.setState(() => {
      return {
        query: target.value,
        moives: getMoives()
          .filter(moive => moive.name
            .toLowerCase()
            .includes(target.value.toLowerCase()))
      }
    })
  }

  render () {
    return [
      <Input
        onChange={this.onChange}
        placeholder='Search'
        key='input'
        value={this.state.query}
      />,
      <MoiveList
        moives={this.state.moives}
        key='moiveList'
      />
    ]
  }
}

export default App
