import { type FC, type ReactNode } from 'react'

import { type ReducersMapObject } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
    asyncReducers?: ReducersMapObject<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props

    const store = createReduxStore(initialState, asyncReducers)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
