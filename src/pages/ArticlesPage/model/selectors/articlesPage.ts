import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Article'
import { ArticleSortType, ArticleType } from 'entities/Article/model/types/article'

export const getArticlesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesError = (state: StateSchema) => state.articlesPage?.error || ''
export const getArticlesView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
export const getArticlesPageInitiated = (state: StateSchema) => state.articlesPage?._initiated
export const getArticlesOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc'
export const getArticlesSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortType.DATE
export const getArticlesSearch = (state: StateSchema) => state.articlesPage?.search ?? ''
export const getArticlesType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL
