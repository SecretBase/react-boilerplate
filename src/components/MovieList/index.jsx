// @flow
import React, {PureComponent} from 'react'
import styled from 'styled-components'
import MovieItem from './MovieItem'
import type {Movie} from './MovieItem'

export type Movies = Array<Movie>

type Props = {
  movies: Movies,
  className: string
}

class MovieList extends PureComponent<Props> {
  render () {
    return (
      <ul className={this.props.className}>
        {this.props.movies.map(moive => <MovieItem key={moive.name} {...moive} />)}
      </ul>
    )
  }
}

export default styled(MovieList)`
  max-width: 980px;
  width: 100%;
  padding: 0;
  margin: auto;
`
