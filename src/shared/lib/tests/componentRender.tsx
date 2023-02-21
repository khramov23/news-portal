import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18ForTests'
import { MemoryRouter } from 'react-router'

interface componentRenderOptions {
    initialPath?: string
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
    const { initialPath = '/' } = options

    render(
        <MemoryRouter initialEntries={[initialPath]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
