import React from 'react';
import { shallow } from 'enzyme';
import InfoIcon from './InfoIcon';

describe('Hashtag', () => {
    let params = {};

    beforeEach(() => {
        params = {
            icon: 'favorite',
            color: 'primary',
            fontSize: 'inherit',
            number: 999,
            text: 'test-text',
            iconSize: 10,
            className: 'test-class-name',
            disabled: false,
        }
    })

    it('Should be without props', () => {
        const wrapper = shallow(<InfoIcon {...params}/>);

        expect(wrapper.find('.info-icon-container')).toHaveLength(1);
    });


});