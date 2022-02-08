
import { mount, shallow } from 'enzyme'

import Trending from './Trending'


// jest.mock('react', {
//     const originalModule = jest.requireActual('react');
//
//     //Mock the default export and named export 'foo'
//     return {
//         __esModule: true,
//         ...originalModule,
//         default: jest.fn(() => 'mocked baz'),
//         useState: jest.fn(() => [[{
//             id: 'My Initial State'
//         }], () => {}]),
//     };
// });
import useState from 'react';


describe('Trending', () => {
    let wrapper;
    let getData;
    let useEffectMock;


    beforeEach(() => {
        getData = jest.fn()
        //trendingFeedMapper.mockImplementation(() => [{id: 1}]);

        //useEffectMock = jest.spyOn(React, "useState").mockImplementationOnce(f => f()());
    })

    it('Should getData on render', () => {
        const myInitialState = [{
            id: 'My Initial State'
        }]

       // useState.mockImplementation([myInitialState, () => {}])
            //let component = shallow(<Trending />)
            //console.log(component.debug())
    })

})

