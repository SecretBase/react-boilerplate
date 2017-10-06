import React from 'react'
import {shallow} from 'enzyme'

import Input from '../index'

describe('Input component', () => {
  it('should render correctlt', () => {
    const wrapper = shallow(
      <Input />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
