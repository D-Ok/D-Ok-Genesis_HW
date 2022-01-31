import { shallow } from 'enzyme'
import UserInfo from './UserInfo'
import React from 'react'

describe('UserInfo', () => {
    let parameters = {}

    beforeEach(() => {
        parameters = {
            avatarLarger: 'avatarLarger',
            bioLink: {
                link: 'link',
                risk: 100,
            },
            nickname: 'Test Name',
            uniqueId: 'unique id',
            signature: 'signature',
        }
    })

    it('Should contain AvatarLink with correct props', () => {
        const wrapper = shallow(<UserInfo {...parameters} />)
        const avatarLinkEl = wrapper.find('AvatarLink');

        expect(avatarLinkEl).toHaveLength(1);

        expect(avatarLinkEl.prop('name')).toBe(parameters.uniqueId)
        expect(avatarLinkEl.prop('nickName')).toBe(parameters.nickname)
        expect(avatarLinkEl.prop('avatar')).toBe(parameters.avatarLarger)
    })

    it('Should contain signature', () => {
        const wrapper = shallow(<UserInfo {...parameters} />)

        expect(!!wrapper.text(parameters.signature)).toBe(true);
    })

    it('Should contain bioLink info', () => {
        const wrapper = shallow(<UserInfo {...parameters} />)
        const correctLink = parameters.bioLink.link;

        const linkEl = wrapper.findWhere((el) => {
            const {href} = el.props();
            return href === correctLink
        })

        expect(linkEl.text()).toEqual(correctLink)
    })

    it('Should not contain bioLink info', () => {
        parameters.bioLink = undefined;
        const wrapper = shallow(<UserInfo {...parameters} />)

        const linkEl = wrapper.findWhere((el) => {
            return !!el.prop('href')
        })
        expect(linkEl).toHaveLength(0);
    })

})