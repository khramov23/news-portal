import { type StateSchema } from '@/app/providers/StoreProvider'

export const getArticleCommentsFormText = (state: StateSchema) => state.articleCommentsForm?.text || ''
export const getArticleCommentsFormIsLoading = (state: StateSchema) => state.articleCommentsForm?.isLoading || false
export const getArticleCommentsFormError = (state: StateSchema) => state.articleCommentsForm?.error
