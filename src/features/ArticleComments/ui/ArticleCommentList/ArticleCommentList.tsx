import { type FC, memo } from 'react'

import { useSelector } from 'react-redux'

import { CommentList } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect'
import { cls } from '@/shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import styles from './ArticleCommentList.module.scss'
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from '../../model/selectors/articleComments'
import { fetchArticleCommentsById } from '../../model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import { articleCommentsReducer, getArticleComments } from '../../model/slice/articleCommentsSlice/articleCommentsSlice'

interface ArticleCommentListProps {
    className?: string
    articleId: string
}

const reducers: ReducersList = {
    articleComments: articleCommentsReducer
}

export const ArticleCommentList: FC<ArticleCommentListProps> = memo(({ className, articleId }) => {
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    const error = useSelector(getArticleCommentsError)

    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchArticleCommentsById(articleId))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount >
            <div className={cls(styles.articleCommentList, className)}>
                <CommentList comments={comments} isLoading={isLoading} error={error} />
            </div>
        </DynamicModuleLoader>

    )
})
