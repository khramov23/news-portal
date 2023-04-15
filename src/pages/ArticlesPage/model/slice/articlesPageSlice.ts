import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article, ArticleView } from 'entities/Article'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { ArticleSortType } from 'entities/Article/model/types/article'
import { type Order } from 'shared/types/sort'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        ids: [],
        entities: {},
        _initiated: false,
        order: 'asc',
        search: '',
        sort: ArticleSortType.DATE
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            state.limit = action.payload === ArticleView.BIG ? 4 : 12
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setOrder: (state, action: PayloadAction<Order>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortType>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        initView: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = state.view === ArticleView.BIG ? 4 : 12
            state._initiated = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasMore = action.payload.length === state.limit

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload)
                } else {
                    articlesAdapter.addMany(state, action.payload)
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: articlesPageActions } = articlesPageSlice
export const { reducer: articlesPageReducer } = articlesPageSlice
