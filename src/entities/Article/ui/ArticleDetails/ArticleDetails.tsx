import { type FC, type ReactNode, useEffect } from 'react'

import styles from './ArticleDetails.module.scss'
import { cls } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchArticleData } from 'entities/Article/model/services/fetchArticleData/fetchArticleData'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleReducer } from '../../model/slice/articleSlice'
import { useSelector } from 'react-redux'
import { getArticleData, getArticleError, getArticleIsLoading } from 'entities/Article/model/selectors/articleDetails'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui/Text/Text'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    article: articleReducer
}

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
    const { id, className } = props
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const data = useSelector(getArticleData)
    const isLoading = useSelector(getArticleIsLoading)
    // const isLoading = true
    const error = useSelector(getArticleError)

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') { void dispatch(fetchArticleData(id)) }
    }, [dispatch, id])

    let content: ReactNode
    if (isLoading) {
        content = (
            <>
                <Skeleton className={styles.avatar} width={200} height={200} borderRadius={'50%'} />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.subtitle} width={600} height={24} />
                <Skeleton className={styles.skeleton} width={'100%'} height={200} />
                <Skeleton className={styles.skeleton} width={'100%'} height={200} />
                <Skeleton className={styles.skeleton} width={'100%'} height={200} />
            </>
        )
    } else if (error) {
        content = <Text
            align='center'
            title={t('Произошла ошибка при загрузке статьи')}
        />
    } else {
        content = <div>{t('articles details')}</div>
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount >
            <div className={cls(styles.articleDetails, className)}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
}
