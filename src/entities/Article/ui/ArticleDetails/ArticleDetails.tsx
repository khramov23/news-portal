import { type FC, type ReactNode, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { cls } from '@/shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Avatar } from '@/shared/ui/Avatar'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'

import styles from './ArticleDetails.module.scss'
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/articleDetails'
import { fetchArticleData } from '../../model/services/fetchArticleData/fetchArticleData'
import { articleReducer } from '../../model/slice/articleSlice'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    article: articleReducer
}

const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={styles.block} block={block} />
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={styles.block} block={block} />
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={styles.block} block={block} />
        default:
            return null
    }
}

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
    const { id, className } = props
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const article = useSelector(getArticleData)
    const isLoading = useSelector(getArticleIsLoading)
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
        content = (
            <>
                <div className={styles.avatarWrapper}>
                    <Avatar size={200} src={article?.img} />
                </div>
                <Text title={article?.title} text={article?.subtitle} size='xl'/>
                <div className={styles.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={styles.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cls(styles.articleDetails, className)}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
}
