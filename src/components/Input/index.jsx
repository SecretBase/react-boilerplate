// @flow
import React, {PureComponent} from 'react'
import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid #ddd;
  width: 980px;
  margin: 16px auto;
  box-sizing: border-box;
  display: block;
  font-size: 24px;
  padding: 8px 16px;
`

type Props = {}

export default class StyledInput extends PureComponent<Props> {
  static displayName = 'Input'
  render () {
    return <Input {...this.props} />
  }
}
