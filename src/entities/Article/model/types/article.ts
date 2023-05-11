import { type User } from '@/entities/User'

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
    ROW = 'ROW'
}

export enum ArticleSortType {
    TITLE = 'title',
    VIEWS = 'views',
    DATE = 'date'
}

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    title?: string
    paragraphs: string[]
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string
    subtitle?: string
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    ECONOMICS = 'ECONOMICS',
    SCIENCE = 'SCIENCE'
}

export interface Article {
    id: string
    title: string
    subtitle: string
    user: User
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}
