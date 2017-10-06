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

  onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState(() => {
      return {
        query: event.target.value,
        moives: getMoives()
          .filter(moive => moive.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase()))
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
