// @flow
import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {lighten} from 'polished'

export type Movie = {
  name: string,
  emoji: string,
  className?: string
}

type Props = Movie

const PaleText = styled.span`
  font-size: 16px;
  color: ${lighten(0.1, 'pink')};
  &::selection {
    background-color: #000;
  }
`

class MovieItem extends PureComponent<Props> {
  render () {
    return (
      <li className={this.props.className}>{this.props.emoji} <PaleText>{this.props.name}</PaleText></li>
    )
  }
}

export default styled(MovieItem)`
  list-style-type: none;
  margin-bottom: 16px;
  font-size: 24px;
  color: #414042;
`
