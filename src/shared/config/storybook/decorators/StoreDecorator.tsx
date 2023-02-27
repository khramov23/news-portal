import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'redux'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}

export const StoreDecorator = (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => {
    return (
        <StoreProvider
            initialState={initialState as StateSchema}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers } as ReducersMapObject<StateSchema>}
        >
            <StoryComponent />
        </StoreProvider>
    )
}
