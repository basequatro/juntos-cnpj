import React from 'react'
import { shallow } from 'enzyme'
import Background from './Background'
import Block from './Block'
import Icon from './Icon'
import Ol from './Ol'
import Row from './Row'
import SubTitle from './SubTitle'
import Title from './Title'
import Wrapper from './Wrapper'

describe('<Background />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Background />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Block />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Block />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Icon />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Icon />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Ol />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Ol />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Row />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Row />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<SubTitle />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<SubTitle />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Title />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Title />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Wrapper />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Wrapper />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
