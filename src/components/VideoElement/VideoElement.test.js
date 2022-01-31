import { shallow, mount } from 'enzyme'
import VideoElement from './VideoElement'
import React from 'react'

import {mockAllIsIntersecting} from 'react-intersection-observer/test-utils'

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: jest.fn(),
// }))

describe('VideoElement', () => {
    let parameters = {}
    let wrapper;

    beforeEach(() => {
        parameters = {
            videoUrl: 'link',
            playOnView: true,
            muted: true,
            isLoad: true
        }

        wrapper = shallow(<VideoElement {...parameters} />)
    })

    it('Should contain video tag', () => {
        const videoEl = wrapper.find('video');

        expect(videoEl).toHaveLength(1);

        expect(videoEl.prop('muted')).toBe(parameters.muted);
        expect(videoEl.prop('src')).toBe(parameters.videoUrl);
    })

    it('Should contain InfoIcon', () => {
        const videoEl = wrapper.find('InfoIcon');

        expect(videoEl).toHaveLength(1);
    })

//     it('Should change state onClick', () => {
//         const playMock = jest
//             .spyOn(window.HTMLMediaElement.prototype, 'play')
//             .mockImplementation(() => {})
//      //   const wrapper = mount(<ComponentWithVideoTag />);
// // trigger the code that you would expect to call the pause function
//
//
//         const setIsPlay = jest.fn();
//        // const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: document.createElement('video') });
//
//         const handleClick = jest.spyOn(React, "useState");
//         handleClick.mockImplementation(isPlay => [isPlay, setIsPlay]);
//
//         wrapper = mount(<VideoElement {...parameters} />)
//         const videoEl = wrapper.find('video');
//
//         videoEl.simulate('click');
//
//         expect(playMock).toBeCalled();
//
//         playMock.mockRestore()
//     })

})