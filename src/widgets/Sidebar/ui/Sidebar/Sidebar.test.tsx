import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation'

describe('Sidebar', () => {
    test('rendering', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        const sidebar = screen.getByTestId('sidebar')

        expect(sidebar).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(sidebar).toHaveClass('collapsed')
    })
})
