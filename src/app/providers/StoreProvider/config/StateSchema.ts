import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'

import { type ArticleSchema } from '@/entities/Article'
import { type UserSchema } from '@/entities/User'
import { type ArticleCommentsSchema, type ArticleCommentsFormSchema } from '@/features/ArticleComments'
import { type LoginSchema } from '@/features/AuthByUsername'
import { type ProfileSchema } from '@/features/EditProfileCard'
import { type ScrollRestorationSchema } from '@/features/ScrollRestoration'
import { type ArticlesPageSchema } from '@/pages/ArticlesPage'
import { type rtkApi } from '@/shared/api/rtk'

import { type createReduxStore } from './store'

export interface StateSchema {
    user: UserSchema
    scroll: ScrollRestorationSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Асинхронные редюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    article?: ArticleSchema
    articleComments?: ArticleCommentsSchema
    articleCommentsForm?: ArticleCommentsFormSchema
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export interface ThunkExtra {
    api: AxiosInstance
}

export interface ThunkApi<T> {
    extra: ThunkExtra
    rejectValue: T
    state: StateSchema
}
