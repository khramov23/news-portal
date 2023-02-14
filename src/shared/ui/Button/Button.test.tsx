import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('rendering', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('button clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
    })
})
