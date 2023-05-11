import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from '@/features/EditProfileCard'
import { articleReducer } from '@/entities/Article/model/slice/articleSlice'
import { articleCommentsFormReducer, articleCommentsReducer } from '@/features/ArticleComments'
import { articlesPageReducer } from '@/pages/ArticlesPage'

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
