import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

describe('<Input />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.length).toEqual(1)
  })
})
