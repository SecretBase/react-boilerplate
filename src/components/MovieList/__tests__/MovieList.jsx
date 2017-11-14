// @flow
import React from 'react'
import {shallow} from 'enzyme'

import MoiveList from '../index'

describe('MoiveList component', () => {
  it('should render correctly', () => {
    const props = {
      moives: [
        {
          name: 'hello',
          emoji: 'world'
        }
      ]
    }
    const wrapper = shallow(
      <MoiveList {...props} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
