import { shallow } from 'enzyme'
import VideoGridElement from './VideoGrigElement'
import React from 'react'


describe('VideoGridElement', () => {
    let parameters = {}
    let wrapper;

    beforeEach(() => {
        parameters = {
            videoUrl: 'link',
            playCount: 400,
        }

        wrapper = shallow(<VideoGridElement {...parameters} />)
    })

    it('Should contain Video tag', () => {
        const videoEl = wrapper.find('Video');

        expect(videoEl).toHaveLength(1);

        expect(videoEl.prop('videoUrl')).toBe(parameters.videoUrl);
        expect(videoEl.prop('controls')).toBe(false);
    })

    it('Should contain arrow Icon', () => {
        const iconEl = wrapper.findWhere(el => {
            return !!el.prop('fontSize')
        });

        expect(iconEl).toHaveLength(1);
        expect(iconEl.text()).toBe('play_arrow');
    })

    it('Should change number of plays', () => {
        const numberContainer = wrapper.find('span');

        expect(numberContainer.text()).toBe(parameters.playCount.toString());
    })

})