import { type FC, memo, useCallback } from 'react'
import { AddCommentForm } from 'entities/Comment/ui/AddCommentForm/AddCommentForm'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment'
import { getArticleCommentsFormText } from '../../model/selectors/articleCommentsForm'
import { useSelector } from 'react-redux'
import {
    articleCommentsFormActions, articleCommentsFormReducer
} from '../../model/slice/articleCommentsFormSlice/articleCommentsFormSlice'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducersList = {
    articleCommentsForm: articleCommentsFormReducer
}

interface ArticleCommentsFormProps {
    className?: string
}

export const ArticleCommentsForm: FC<ArticleCommentsFormProps> = memo(() => {
    const dispatch = useAppDispatch()

    const text = useSelector(getArticleCommentsFormText)

    const onSendComment = useCallback(() => {
        void dispatch(addArticleComment())
    }, [dispatch])

    const onChangeText = useCallback((value: string) => {
        dispatch(articleCommentsFormActions.setText(value))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <AddCommentForm
                onSendComment={onSendComment}
                onChangeText={onChangeText}
                text={text}
            />
        </DynamicModuleLoader>
    )
})
