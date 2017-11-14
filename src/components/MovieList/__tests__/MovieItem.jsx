// @flow
import React from 'react'
import {shallow} from 'enzyme'

import MovieItem from '../MovieItem'

describe('MovieItem component', () => {
  it('should render correctly', () => {
    const props = {
      name: 'Hello',
      emoji: 'World'
    }
    const wrapper = shallow(
      <MovieItem {...props} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
