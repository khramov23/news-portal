import { render, screen } from '@testing-library/react'

import { Button, ButtonTheme } from '../Button/Button'

describe('Button', () => {
    test('rendering', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('button clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
    })
})
