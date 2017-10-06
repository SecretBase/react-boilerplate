import React from 'react'
import {mount} from 'enzyme'
import renderer from 'react-test-renderer'

import App, {getMoives} from '../App'
import Input from '../components/Input'

describe('App Component', () => {
  it('should correct rendered.', () => {
    const component = renderer.create(<App />)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should return a list of movies', () => {
    expect(getMoives()).toMatchSnapshot()
  })

  it('should render a only Cars 3', () => {
    const wrapper = mount(
      <App />
    )

    wrapper.setState((prev) => {
      return {
        ...prev,
        query: 'Cars'
      }
    })

    const input = wrapper.find(Input)

    input.simulate('change')

    expect(wrapper).toMatchSnapshot()
  })
})
