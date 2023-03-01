import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
    asyncReducers?: ReducersMapObject<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props
    const navigate = useNavigate()

    const store = createReduxStore(initialState, asyncReducers, navigate)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
