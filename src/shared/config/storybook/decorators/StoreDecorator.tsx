import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { articleReducer } from '@/entities/Article'
import { articleCommentsFormReducer, articleCommentsReducer } from '@/features/ArticleComments'
import { loginReducer } from '@/features/AuthByUsername'
import { profileReducer } from '@/features/EditProfileCard'
import { articlesPageReducer } from '@/pages/ArticlesPage'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    articleComments: articleCommentsReducer,
    articleCommentsForm: articleCommentsFormReducer,
    articlesPage: articlesPageReducer
}

export const StoreDecorator = (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
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
