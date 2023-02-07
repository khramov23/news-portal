import { cls } from './classNames'

describe('classNames', function () {
    test('one class', () => {
        const classes = cls('first')
        expect(classes).toBe('first')
    })

    test('2 classes', () => {
        const classes = cls('first', 'second')
        expect(classes).toBe('first second')
    })

    test('classes with mod true', () => {
        const classes = cls('first', 'second', { third: true })
        expect(classes).toBe('first second third')
    })

    test('classes with mod false', () => {
        const classes = cls('first', 'second', { someUnusedClass: false })
        expect(classes).toBe('first second')
    })

    test('classes with all mods', () => {
        const classes = cls('first', 'second', { someUnusedClass: false, third: true })
        expect(classes).toBe('first second third')
    })
})
