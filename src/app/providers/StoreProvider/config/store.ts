import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'

import { userReducer } from '@/entities/User'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtk'
import { scrollRestorationReducer } from '@/widgets/ScrollRestoration'

import { createReducerManager } from './reducerManager'
import { type StateSchema } from './StateSchema'

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scroll: scrollRestorationReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        }).concat(rtkApi.middleware)
    })

    // @ts-expect-error something eo fjs
    store.reducerManager = reducerManager

    return store
}
