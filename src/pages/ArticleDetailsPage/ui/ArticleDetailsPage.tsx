import { type FC, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router'

import { ArticleDetails } from '@/entities/Article'
import { ArticleCommentList, ArticleCommentsForm } from '@/features/ArticleComments'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendations } from '@/features/ArticleRecommendations'
import { getRouteArticles } from '@/shared/config/routes/routes.config'
import { cls } from '@/shared/lib/classNames'
import { Button } from '@/shared/ui/Button'
import { Page } from '@/widgets/Page'

import styles from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation()
    const navigate = useNavigate()

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles())
    }, [navigate])

    if (!id) {
        return <Page className={cls(styles.articleDetailsPage, className)}>
            {t('Статья не найдена')}
        </Page>
    }

    return (
        <Page className={cls(styles.articleDetailsPage, className)} data-testid={'ArticleDetailsPage'}>
            <Button onClick={onBackToList}>{t('Вернуться к списку')}</Button>
            <ArticleDetails id={id} />
            <ArticleRating articleId={id} />
            <ArticleRecommendations />
            <ArticleCommentsForm />
            <ArticleCommentList articleId={id} />
        </Page>
    )
}

export default ArticleDetailsPage
