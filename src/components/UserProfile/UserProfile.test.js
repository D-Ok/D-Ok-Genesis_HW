import { shallow } from 'enzyme'
import UserProfile from './UserProfile'
import React from 'react'

describe('UserProfile', () => {
    let parameters = {}

    beforeEach(() => {
        parameters = {
           user: {}, stats: {}
        }
    })

    it('Should contain UserInfo and StatsInfo', () => {
        const wrapper = shallow(<UserProfile {...parameters} />)

        expect(wrapper.find('UserInfo')).toHaveLength(1);
        expect(wrapper.find('StatsInfo')).toHaveLength(1);
    })

    it('Should not contain StatsInfo', () => {
        parameters.stats = undefined;
        const wrapper = shallow(<UserProfile {...parameters} />)

        expect(wrapper.find('StatsInfo')).toHaveLength(0);
    })

    it('Should not contain UserInfo', () => {
        parameters.user = undefined;
        const wrapper = shallow(<UserProfile {...parameters} />)

        expect(wrapper.find('UserInfo')).toHaveLength(0);
    })
})