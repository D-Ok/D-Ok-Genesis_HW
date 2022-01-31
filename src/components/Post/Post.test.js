import React from 'react'
import { shallow } from 'enzyme'
import Post from './Post'

describe('Post', () => {
    let parameters = {}

    beforeEach(() => {
        parameters = {
            video: {
                duration: 15,
                height: 100,
                width: 100,
                playAddr: 'link',
            },
            author: {
                avatarThumb: 'avatarLink'
            },
            text: "Text",
            stats: {
                diggCount: 200,
                commentCount: 300,
            },
            challenges: [
               {
                    id: '1',
                    title: 'first',
               }, {
                    id: '2',
                    title: 'second',
                },
            ]
        }
    })

    it('Should not be rendered without props', () => {
        const wrapper = shallow(<Post />)

        expect(!!wrapper.html()).toBe(false)
    })

    it('Should contain rendered video', () => {
        const wrapper = shallow(<Post {...parameters}/>)

        const videoEl = wrapper.findWhere((el) => {
            const {videoUrl} = el.props();
            return !!videoUrl
        })

        expect(videoEl).toHaveLength(1);
        expect(videoEl.props().videoUrl).toEqual(parameters.video.playAddr);
    })

    it('Should contain author info', () => {
        const wrapper = shallow(<Post {...parameters}/>)

        const authorEl = wrapper.findWhere((el) => {
            const {avatar} = el.props();
            return avatar && avatar === parameters.author.avatarThumb
        })

        expect(authorEl).toHaveLength(1);
    })

    it('Should not contain author info', () => {
        parameters.author = undefined;
        const wrapper = shallow(<Post {...parameters}/>)

        const authorEl = wrapper.findWhere((el) => {
            const {avatar} = el.props();
            return avatar
        })

        expect(authorEl).toHaveLength(0);
    })

    it('Should contain text', () => {
        const wrapper = shallow(<Post {...parameters}/>)

        expect(!!wrapper.text(parameters.text)).toBe(true)
    })

    it('Should contain hearts and comments', () => {
        const wrapper = shallow(<Post {...parameters}/>)

        expect(wrapper.find('InfoIcon')).toHaveLength(2);
    })

    it('Should contain correct number of hearts', () => {
        const wrapper = shallow(<Post {...parameters}/>)
        const expected = parameters.stats.diggCount;

        let heartEl = wrapper.find('InfoIcon').at(0);

        expect(heartEl.props().number).toBe(expected);
    })

    it('Should contain correct number of comments', () => {
        const wrapper = shallow(<Post {...parameters}/>)
        const expected = parameters.stats.commentCount;

        let heartEl = wrapper.find('InfoIcon').at(1);

        expect(heartEl.props().number).toBe(expected);
    })

    it('Should contains correct number of hashtags', () => {
        const wrapper = shallow(<Post {...parameters}/>)

        const expectedNumber = parameters.challenges.length;

        expect(wrapper.find('Hashtag')).toHaveLength(expectedNumber);
    })

    it('Should contains correct hashtags', () => {
        const wrapper = shallow(<Post {...parameters}/>)

        const expectedNumber = parameters.challenges.length;

        const hashtagArr = parameters.challenges.map(hash => {return hash.title});
        let numberOfCorrect = 0;
        wrapper.find('Hashtag').forEach((el) => {
            if(hashtagArr.includes(el.props().name)){
                numberOfCorrect++;
            }
        })
        expect(numberOfCorrect).toBe(expectedNumber);
    })
})