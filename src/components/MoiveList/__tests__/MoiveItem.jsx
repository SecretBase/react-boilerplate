// @flow
import React from 'react'
import {shallow} from 'enzyme'

import MoiveItem from '../MoiveItem'

describe('MoiveItem component', () => {
  it('should render correctly', () => {
    const props = {
      name: 'Hello',
      emoji: 'World'
    }
    const wrapper = shallow(
      <MoiveItem {...props} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
