import defaultMapper from './defaultMapper'
import trendingFeedMapper from './trendingFeedMapper'
import userBaseInfoMapper from './userBaseInfoMapper'
import userFeedMapper from './userFeedMapper'
import userInfoMapper from './userInfoMapper'
import * as api from '../api/api'
import { GLOBAL_CONSTANTS } from '../assets/constants'

describe('services', () => {

    describe('defaultMapper', () => {
        const defaultReturn = ['default'];

        let request ;
        let callback;

        beforeEach(() => {
            callback = () => 'callback'

            request = (params) => {
                return { data: params ? {params} : [] }
            }
        })

        it('Should return data ', async () => {
            let result = await defaultMapper({request});
            expect(result).toEqual([])
        })

        it('Should return data with params', async () => {
            const parameters = 'hello';
            let result = await defaultMapper({
                request,
                parameters
            });
            expect(result).toEqual({params: parameters})
        })


        describe('error', () => {

            it('Should not return data', async () => {
                request = () => {return { data: 'error'}}

                let result = await defaultMapper({
                    request
                });
                expect(!!result).toBe(false)
            })

            it('Should return defaultData', async () => {
                request = () => {return { data: 'error'}}

                let result = await defaultMapper({
                    request,
                    defaultReturn
                });
                expect(result).toEqual(defaultReturn)
            })

        })

    })

    describe('mappers with getData ', () => {
        let   getDataMock;
        beforeEach(() => {
            getDataMock = jest.spyOn(api, 'getData')
            getDataMock.mockImplementation(() => {
                return {data: 'hello'}
            });
        })

        describe('trendingFeedMapper', () => {

            it('getTrendingFeedMock should be called', async () => {
                const result = await trendingFeedMapper()
                expect(getDataMock).toBeCalled()
            })

            it('should contain data', async () => {
                const result = await trendingFeedMapper()
                expect(!!result).toBe(true)
            })

            it('should contain data in callback', async () => {
                const callback = (data) =>{
                    expect(!!data).toBe(true)
                }
                const result = await trendingFeedMapper(callback)
            })
        })

        describe('userBaseInfoMapper', () => {
            const uniqueId = 'hello';

            it('getData should be called', async () => {
                const result = await userBaseInfoMapper(uniqueId)
                expect(getDataMock).toBeCalled()
            })

            it('should contain data', async () => {
                const result = await userBaseInfoMapper(uniqueId)
                expect(!!result).toBe(true)
            })

            it('should contain data in callback', async () => {
                const callback = (data) =>{
                    expect(!!data).toBe(true)
                }
                const result = await userBaseInfoMapper(uniqueId, callback)
            })
        })

        describe('userFeedMapper', () => {
            const uniqueId = 'hello';
            const userFeedEndpoint = GLOBAL_CONSTANTS.API.ENDPOINTS.USER.FEED

            it('getData should be called', async () => {
                const result = await userFeedMapper(uniqueId)
                expect(getDataMock).toBeCalled()
            })

            it('getData should be called with params ', async () => {
                const result = await userFeedMapper(uniqueId)
                expect(getDataMock).toBeCalledWith(`${userFeedEndpoint}${uniqueId}`)
            })

            it('should contain data', async () => {
                const result = await userFeedMapper(uniqueId)
                expect(!!result).toBe(true)
            })

            it('should contain data in callback', async () => {
                const callback = (data) =>{
                    expect(!!data).toBe(true)
                }
                const result = await userFeedMapper(uniqueId, callback)
            })
        })

        describe('userInfoMapper', () => {
            const uniqueId = 'hello';
            const userInfoEndpoint = GLOBAL_CONSTANTS.API.ENDPOINTS.USER.INFO

            it('getData should be called', async () => {
                const result = await userInfoMapper(uniqueId)
                expect(getDataMock).toBeCalled()
            })

            it('getData should be called with params ', async () => {
                const result = await userInfoMapper(uniqueId)
                expect(getDataMock).toBeCalledWith(`${userInfoEndpoint}${uniqueId}`)
            })

            it('should contain data', async () => {
                const result = await userInfoMapper(uniqueId)
                expect(!!result).toBe(true)
            })

            it('should contain data in callback', async () => {
                const callback = (data) =>{
                    expect(!!data).toBe(true)
                }
                const result = await userInfoMapper(uniqueId, callback)
            })
        })
    })

})