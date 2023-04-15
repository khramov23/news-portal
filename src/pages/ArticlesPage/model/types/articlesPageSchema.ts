import { type Article, type ArticleView } from 'entities/Article'
import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleSortType } from 'entities/Article/model/types/article'
import { type Order } from 'shared/types/sort'

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    // pagination
    limit?: number
    page: number
    hasMore: boolean

    // filters
    view: ArticleView
    sort: ArticleSortType
    order: Order
    search: string

    _initiated: boolean
}
