import { type FC, memo } from 'react'

import styles from './ArticleCommentList.module.scss'
import { cls } from 'shared/lib/classNames'
import { useSelector } from 'react-redux'
import { articleCommentsReducer, getArticleComments } from 'features/ArticleComments/model/slice/articleCommentsSlice'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from 'features/ArticleComments/model/selectors/articleComments'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchArticleCommentsById } from 'features/ArticleComments/model/services/fetchArticleCommentsById'

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
