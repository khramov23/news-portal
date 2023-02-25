import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18ForTests'
import { MemoryRouter } from 'react-router'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'redux'

interface componentRenderOptions {
    initialPath?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
    const { initialPath = '/', initialState } = options

    render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[initialPath]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
