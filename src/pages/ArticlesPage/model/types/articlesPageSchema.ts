import { type EntityState } from '@reduxjs/toolkit'

import { type Article, type ArticleView, type ArticleSortType, type ArticleType } from '@/entities/Article'
import { type Order } from '@/shared/types/sort'

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
    type: ArticleType

    _initiated: boolean
}
