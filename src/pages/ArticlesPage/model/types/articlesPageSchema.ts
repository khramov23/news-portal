import { type Article, type ArticleView } from 'entities/Article'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
    view: ArticleView

    limit?: number
    page: number
    hasMore: boolean
}
