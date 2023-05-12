import { type StateSchema } from '@/app/providers/StoreProvider'

import { getArticleCommentsError, getArticleCommentsIsLoading } from './articleComments'

describe('getProfileData', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                isLoading: true
            }
        }
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false)
    })
})

describe('getProfileError', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                error: 'someError'
            }
        }
        expect(getArticleCommentsError(state as StateSchema)).toEqual('someError')
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined)
    })
})
