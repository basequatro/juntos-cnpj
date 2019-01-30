import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<MyButton />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.length).toEqual(1)
  })
  //   it('Should render without crashing', () => {
  //     const mockCountFunc = jest.fn()
  //     const wrapper = shallow(<Button countFunc={mockCountFunc} />)
  //     const btn = wrapper.find('button')
  //     btn.simulate('click')
  //     expect(mockCountFunc).toHaveBeenCalled()
  //   })
})
