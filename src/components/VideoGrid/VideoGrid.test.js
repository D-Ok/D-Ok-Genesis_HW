import { shallow } from 'enzyme'
import VideoGrid from './VideoGrid'
import React from 'react'


describe('VideoGrid', () => {
    let parameters = {}
    let wrapper;

    beforeEach(() => {
        parameters = {
            videos: [
                {
                    video: {
                        playAddr: 'link1'
                    },
                    stats: {
                        playCount: 200
                    }
                },
                {
                    video: {
                        playAddr: 'link2'
                    },
                    stats: {
                        playCount: 100
                    }
                },
                {
                    video: {
                        playAddr: 'link3'
                    },
                    stats: {
                        playCount: 300
                    }
                }
            ]
        }

        wrapper = shallow(<VideoGrid {...parameters} />)
    })

    it('Should be rendered without props', () => {
        wrapper = shallow(<VideoGrid />)

        expect(wrapper.length > 0).toBe(true)
    })

    it('Should contain VideoGridElement', () => {
        const videoEl = wrapper.find('VideoGridElement');

        expect(videoEl).toHaveLength(parameters.videos.length);
    })

    it('All videos should contains correct props', () => {

        parameters.videos.forEach(({video, stats}) => {
            let el = wrapper.findWhere( el => {
                const {videoUrl, playCount} = el.props();
                return videoUrl === video.playAddr && playCount === stats.playCount;
            })

            expect(el).toHaveLength(1);
        })
    })

})