import React from 'react'
import { shallow } from 'enzyme'
import MenuBar from './MenuBar'

describe('MenuBar', () => {
  let parameters = {}

  beforeEach(() => {
    parameters = {
      user: {
        userName: 'Test User',
        avatar: 'image',
      },
    }
  })

  it('Should be rendered without props', () => {
    const wrapper = shallow(<MenuBar />)

    expect(wrapper.isEmptyRender()).toBe(false)
  })

  it('Should contain name', () => {
    const wrapper = shallow(<MenuBar />)

    const headerEl = wrapper.findWhere((el) => {
      const {variant, component} = el.props();
      return variant && component
    })

    expect(headerEl.text()).toEqual('TikTuk');
  })

  it('Should contain user information', () => {
    const wrapper = shallow(<MenuBar {...parameters}/>)
    const { user } = parameters;

    const headerEl = wrapper.findWhere((el) => {
      const {alt, src} = el.props();
      return alt === user.userName && src === user.avatar
    })

    expect(headerEl).toHaveLength(1);
  })

  it('Should not contain user information', () => {
    const wrapper = shallow(<MenuBar />)

    const headerEl = wrapper.findWhere((el) => {
      const {alt, src} = el.props();
      return alt && src
    })

    expect(headerEl).toHaveLength(0);
  })

  it('The header should be clickable', () => {
    let i = 0;
    parameters.onTitleClick = () => i++
    const wrapper = shallow(<MenuBar {...parameters}/>)

    const headerEl = wrapper.findWhere((el) => {
      const {variant, component} = el.props();
      return variant && component
    })

    headerEl.simulate('click');
    expect(i).toBe(1);
  })

  it('The avatar should be clickable', () => {
    let str = '';
    parameters.onAvatarClick = (name) => str = name;
    const wrapper = shallow(<MenuBar {...parameters}/>)

    const avatarEl = wrapper.findWhere((el) => {
      const {size, color} = el.props();
      return size && color
    })

    avatarEl.simulate('click');
    expect(str).toEqual(parameters.user.userName)
  })
})
