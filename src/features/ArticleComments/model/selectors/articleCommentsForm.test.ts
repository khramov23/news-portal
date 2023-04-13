import { type StateSchema } from 'app/providers/StoreProvider'
import { getArticleCommentsFormIsLoading, getArticleCommentsFormError, getArticleCommentsFormText } from './articleCommentsForm'

describe('getArticleCommentsFormText', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            articleCommentsForm: {
                text: 'text of comment'
            }
        }
        expect(getArticleCommentsFormText(state as StateSchema)).toEqual('text of comment')
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleCommentsFormText(state as StateSchema)).toEqual('')
    })
})

describe('getArticleCommentsFormIsLoading', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            articleCommentsForm: {
                isLoading: true
            }
        }
        expect(getArticleCommentsFormIsLoading(state as StateSchema)).toEqual(true)
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleCommentsFormIsLoading(state as StateSchema)).toEqual(false)
    })
})

describe('getArticleCommentsFormError', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            articleCommentsForm: {
                error: 'someError'
            }
        }
        expect(getArticleCommentsFormError(state as StateSchema)).toEqual('someError')
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleCommentsFormError(state as StateSchema)).toEqual(undefined)
    })
})
