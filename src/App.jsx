// @flow
import React, { PureComponent } from 'react'

import MovieList from './components/MovieList'
import type {Movies} from './components/MovieList'
import Input from './components/Input'

type Props = {}
type State = {
  movies: Movies,
  query: string
}

export const getMovies = (): Movies => [
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
    name: 'Harry Potter',
    emoji: '👦🏻 👓 ⚡️'
  }
]

class App extends PureComponent<Props, State> {
  state = {
    movies: getMovies(),
    query: ''
  }

  onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const {target} = event
    this.setState(() => {
      return {
        query: target.value,
        movies: getMovies()
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
      <MovieList
        movies={this.state.movies}
        key='moiveList'
      />
    ]
  }
}

export default App
