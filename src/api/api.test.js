import axios from 'axios';
import {getData} from './api'
import React from 'react'

import { GLOBAL_CONSTANTS } from '../assets/constants'
import * as api from './api'
import getTrendingFeed from './getTrendingFeed'
import getUserFeed from './getUserFeed'
import getUserInfo from './getUserInfo'

const {
    API: { HEADERS, PATHNAME },
} = GLOBAL_CONSTANTS


describe('api folder ', () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    let endpoint = 'test-endpoint'

    describe('api', () => {
        let handleResponse;

        beforeEach(() => {
            endpoint = 'test-endpoint'

            handleResponse = jest.spyOn(axios, "request");
            handleResponse.mockImplementation(() => resp);
        })

        it('Should return response', () => {
            expect(getData(endpoint)).toEqual(resp)
        })

        it('Should contains correct options', () => {
            const expectedData = {
                method: 'GET',
                url: `${PATHNAME}${endpoint}`,
                headers: { ...HEADERS},
            }

            getData(endpoint);
            expect(handleResponse).toBeCalledWith(expectedData)
        })
    })

    describe(' using api ', () => {
        let getDataMock;
        const userId = 'userId'

        beforeEach(() => {
            getDataMock = jest.spyOn(api, 'getData')
            getDataMock.mockImplementation(() => resp);
        })

        describe('getTrendingFeed', () => {
            const trendingFeedUrl = GLOBAL_CONSTANTS.API.ENDPOINTS.TRENDING_FEED

            it('Should return response', () => {
                expect(getTrendingFeed()).toEqual(resp)
            })

            it('Should be called with trendingFeed endpoint', () => {
                getTrendingFeed()
                expect(getDataMock).toBeCalledWith(trendingFeedUrl)
            })
        })

        describe('getUserFeed', () => {
            const userFeedEndpoint = GLOBAL_CONSTANTS.API.ENDPOINTS.USER.FEED

            it('Should return response', () => {
                expect(getUserFeed(userId)).toEqual(resp)
            })

            it('Should be called with userFeed endpoint', () => {
                const expectedEndpoint = `${userFeedEndpoint}${userId}`;

                getUserFeed(userId)
                expect(getData).toBeCalledWith(expectedEndpoint)
            })
        })

        describe('getUserInfo', () => {
            const userInfoEndpoint = GLOBAL_CONSTANTS.API.ENDPOINTS.USER.INFO

            it('Should return response', () => {
                expect(getUserInfo(userId)).toEqual(resp)
            })

            it('Should be called with userInfo endpoint', () => {
                const expectedEndpoint = `${userInfoEndpoint}${userId}`;

                getUserInfo(userId)
                expect(getData).toBeCalledWith(expectedEndpoint)
            })
        })
    })

})
