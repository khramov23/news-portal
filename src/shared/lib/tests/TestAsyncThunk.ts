import { type AsyncThunkAction, type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import axios, { type AxiosStatic } from 'axios'

export type ActionCreatorType<Return, Arg, RejectValueType> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValueType }>

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectValueType> {
    dispatch: Dispatch
    getState: () => StateSchema
    actionCreator: ActionCreatorType<Return, Arg, RejectValueType>
    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor (
        actionCreator: ActionCreatorType<Return, Arg, RejectValueType>,
        state?: DeepPartial<StateSchema>
    ) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)
        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate })
        return result
    }
}
