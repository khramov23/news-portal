import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type ScrollRestorationSchema } from '../types/scrollRestorationSchema'

const initialState: ScrollRestorationSchema = {
    '/articles': 0
}

export const scrollRestorationSlice = createSlice({
    name: 'scrollRestoration',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
            state[action.payload.path] = action.payload.position
        }
    }
})

export const { actions: scrollRestorationActions } = scrollRestorationSlice
export const { reducer: scrollRestorationReducer } = scrollRestorationSlice
