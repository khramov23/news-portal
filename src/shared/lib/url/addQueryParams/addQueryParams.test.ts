import { getQueryParams } from './addQueryParams'

describe('addQueryParams', () => {
    test('1 argument', () => {
        const value = getQueryParams({
            sort: 'views'
        })
        expect(value).toBe('?sort=views')
    })

    test('2 arguments', () => {
        const value = getQueryParams({
            sort: 'views',
            order: 'desc'
        })
        expect(value).toBe('?sort=views&order=desc')
    })

    test('2 arguments, 1 undefined', () => {
        const value = getQueryParams({
            sort: 'views',
            order: 'desc',
            something: undefined
        })
        expect(value).toBe('?sort=views&order=desc')
    })

    test('empty object', () => {
        const value = getQueryParams({})
        expect(value).toBe('?')
    })
})
