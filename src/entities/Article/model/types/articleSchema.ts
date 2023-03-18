import { type Article } from '../types/article'

export interface ArticleSchema {
    data?: Article
    error?: string
    isLoading: boolean
}
