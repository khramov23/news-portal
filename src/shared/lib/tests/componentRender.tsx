import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18ForTests'
import { MemoryRouter } from 'react-router'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface componentRenderOptions {
    initialPath?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
    const { initialPath = '/', initialState, asyncReducers } = options

    render(
        <MemoryRouter initialEntries={[initialPath]}>
            <StoreProvider
                initialState={initialState as StateSchema}
                asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
            >
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
