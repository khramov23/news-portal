import { fireEvent, screen } from '@testing-library/react'

import { componentRender } from '@/shared/lib/tests/componentRender'

import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('rendering', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle', () => {
        componentRender(<Sidebar/>)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        const sidebar = screen.getByTestId('sidebar')

        expect(sidebar).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(sidebar).toHaveClass('collapsed')
    })
})
