import { shallow } from 'enzyme'
import StatsInfo from './StatsInfo'
import React from 'react'

describe('StatsInfo', () => {
    let parameters = {}

    beforeEach(() => {
        parameters = {
            followerCount: 1,
            followingCount: 2,
            heartCount: 3,
            videoCount: 4,
        }
    })

    it('Should contain correct number of InfoIcons', () => {
        const wrapper = shallow(<StatsInfo {...parameters}/>)

        expect(wrapper.find('InfoIcon')).toHaveLength(4)
    })

    it('Should contain correct number of hearts', () => {
        const wrapper = shallow(<StatsInfo {...parameters}/>)

        const heartsEl = wrapper.findWhere((el) => {
            const {text, number} = el.props()
            return text === 'Hearts' && number === parameters.heartCount
        })
        expect(heartsEl).toHaveLength(1)
    })

    it('Should contain correct number of videos', () => {
        const wrapper = shallow(<StatsInfo {...parameters}/>)

        const videoEl = wrapper.findWhere((el) => {
            const {text, number} = el.props()
            return text === 'Videos' && number === parameters.videoCount
        })
        expect(videoEl).toHaveLength(1)
    })

    it('Should contain correct number of followerCount', () => {
        const wrapper = shallow(<StatsInfo {...parameters}/>)

        const followersEl = wrapper.findWhere((el) => {
            const {text, number} = el.props()
            return text === 'Followers' && number === parameters.followerCount
        })
        expect(followersEl).toHaveLength(1)
    })

    it('Should contain correct number of followerCount', () => {
        const wrapper = shallow(<StatsInfo {...parameters}/>)

        const followingEl = wrapper.findWhere((el) => {
            const {text, number} = el.props()
            return text === 'Following' && number === parameters.followingCount
        })
        expect(followingEl).toHaveLength(1)
    })
})