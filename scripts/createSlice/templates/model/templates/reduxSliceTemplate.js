const firstLetterToLowerCase = require('../../../utils/firstLetterToLowerCase')

module.exports = (sliceName) => {
    const lowerSliceName = firstLetterToLowerCase(sliceName)

    return `import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ${sliceName}Schema } from '../types/${sliceName}Schema'

const initialState: ${sliceName}Schema = {
    isLoading: false,
    error: undefined,
}

export const ${lowerSliceName}Slice = createSlice({
    name: '${lowerSliceName}',
    initialState,
    reducers: {
        setSomething: (state, action: PayloadAction<string>) => {
            state.something = action.payload
        }
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(.pending, (state) => {
        //         state.isLoading = true
        //         state.error = undefined
        //     })
        //     .addCase(.fulfilled, (state) => {
        //         state.isLoading = false
        //         state.text = ''
        //     })
        //     .addCase(.rejected, (state, action) => {
        //         state.isLoading = false
        //         state.error = action.payload
        //         state.text = ''
        //     })
    }
})

export const { actions: ${lowerSliceName}Actions } = ${lowerSliceName}Slice
export const { reducer: ${lowerSliceName}Reducer } = ${lowerSliceName}Slice
`
}
