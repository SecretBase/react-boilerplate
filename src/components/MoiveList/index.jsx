// @flow
import React, {PureComponent} from 'react'
import styled from 'styled-components'
import MoiveItem from './MoiveItem'
import type {Moive} from './MoiveItem'

export type Moives = Array<Moive>

type Props = {
  moives: Moives
}

const Ul = styled.ul`
  width: 980px;
  padding: 0;
  margin: auto;
`

export default class MoiveList extends PureComponent<Props> {
  render () {
    return (
      <Ul>
        {this.props.moives.map(moive => <MoiveItem key={moive.name} {...moive} />)}
      </Ul>
    )
  }
}
