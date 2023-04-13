import { type StateSchema } from 'app/providers/StoreProvider'
import { getArticleData, getArticleError, getArticleIsLoading } from './articleDetails'
import { type Article } from 'entities/Article'
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article'

describe('getArticleData', () => {
    test('works with value', () => {
        const data: Article = {
            id: '1',
            type: [ArticleType.SCIENCE],
            views: 20,
            img: 'someurl',
            subtitle: 'Subtitle',
            title: 'title',
            user: {
                id: '1',
                username: 'khramov',
                avatar: 'something.com '
            },
            createdAt: '25.03.2017',
            blocks: [{
                type: ArticleBlockType.CODE,
                code: 'var a = 5; \n const b = a + 5',
                id: '1'
            }]
        }

        const state: DeepPartial<StateSchema> = {
            article: {
                data
            }
        }
        expect(getArticleData(state as StateSchema)).toEqual(data)
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleData(state as StateSchema)).toEqual(undefined)
    })
})

describe('getArticleIsLoading', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                isLoading: true
            }
        }
        expect(getArticleIsLoading(state as StateSchema)).toEqual(true)
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleIsLoading(state as StateSchema)).toEqual(false)
    })
})

describe('getArticleError', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                error: 'err'
            }
        }
        expect(getArticleError(state as StateSchema)).toEqual('err')
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleError(state as StateSchema)).toEqual(undefined)
    })
})
