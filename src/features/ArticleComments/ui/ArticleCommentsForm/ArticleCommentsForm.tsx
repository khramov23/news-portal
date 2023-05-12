import { type FC, memo, useCallback } from 'react'
import { AddCommentForm } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment'
import { getArticleCommentsFormText } from '../../model/selectors/articleCommentsForm'
import { useSelector } from 'react-redux'
import {
    articleCommentsFormActions, articleCommentsFormReducer
} from '../../model/slice/articleCommentsFormSlice/articleCommentsFormSlice'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Text } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import styles from './ArticleCommentsForm.module.scss'

const reducers: ReducersList = {
    articleCommentsForm: articleCommentsFormReducer
}

interface ArticleCommentsFormProps {
    className?: string
}

export const ArticleCommentsForm: FC<ArticleCommentsFormProps> = memo(() => {
    const { t } = useTranslation()
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
            <Text className={styles.commentTitle} title={t('Комментарии')} />
            <AddCommentForm
                onSendComment={onSendComment}
                onChangeText={onChangeText}
                text={text}
            />
        </DynamicModuleLoader>
    )
})
