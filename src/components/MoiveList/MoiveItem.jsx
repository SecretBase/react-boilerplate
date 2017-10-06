// @flow
import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {lighten} from 'polished'

export type Moive = {
  name: string,
  emoji: string
}

type Props = Moive

const Item = styled.li`
  list-style-type: none;
  margin-bottom: 16px;
  font-size: 24px;
  color: #414042;
`

const PaleText = styled.span`
  font-size: 16px;
  color: ${lighten(0.1, 'pink')};
  &::selection {
    background-color: #000;
  }
`

export default class MoiveItem extends PureComponent<Props> {
  render () {
    return (
      <Item> {this.props.emoji} <PaleText>{this.props.name}</PaleText> </Item>
    )
  }
}
