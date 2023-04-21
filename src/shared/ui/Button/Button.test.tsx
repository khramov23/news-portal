import { Button, ButtonTheme } from '../Button/Button'
import { render, screen } from '@testing-library/react'

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
