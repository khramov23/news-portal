import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type createReduxStore } from './store'
import { type ProfileSchema } from 'features/EditProfileCard'
import { type AxiosInstance } from 'axios'
import { type NavigateFunction } from 'react-router'
import { type ArticleSchema } from 'entities/Article'
import { type ArticleCommentsSchema } from 'features/ArticleComments'
import { type ArticleCommentsFormSchema } from 'features/ArticleComments/model/types/articleCommentsFormSchema'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

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
    navigate?: NavigateFunction
}

export interface ThunkApi<T> {
    extra: ThunkExtra
    rejectValue: T
    state: StateSchema
}
