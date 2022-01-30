import { shallow } from 'enzyme'
import Trending from './Trending'
import React from 'react'


describe('Trending', () => {
    let wrapper;

    // beforeEach(() => {
    //     wrapper = shallow(<Trending {...parameters} />)
    // })
    it('Should be rendered', () => {
        wrapper = shallow(<Trending  />)
    })
})