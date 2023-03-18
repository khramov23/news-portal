import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleData = (state: StateSchema) => state.article?.data
export const getArticleError = (state: StateSchema) => state.article?.error
export const getArticleIsLoading = (state: StateSchema) => state.article?.isLoading
