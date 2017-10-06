// @flow
import React, {PureComponent} from 'react'
import styled from 'styled-components'
import MoiveItem from './MoiveItem'
import type {Moive} from './MoiveItem'

export type Moives = Array<Moive>

type Props = {
  moives: Moives,
  className: string
}

class MoiveList extends PureComponent<Props> {
  render () {
    return (
      <ul className={this.props.className}>
        {this.props.moives.map(moive => <MoiveItem key={moive.name} {...moive} />)}
      </ul>
    )
  }
}

export default styled(MoiveList)`
  width: 980px;
  padding: 0;
  margin: auto;
`
