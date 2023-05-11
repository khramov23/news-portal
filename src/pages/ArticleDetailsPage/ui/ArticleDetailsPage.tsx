import { type FC, useCallback } from 'react'

import styles from './ArticleDetailsPage.module.scss'
import { cls } from '@/shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from '@/entities/Article'
import { useNavigate, useParams } from 'react-router'
import { ArticleCommentList } from '@/features/ArticleComments/ui/ArticleCommentList/ArticleCommentList'
import { ArticleCommentsForm } from '@/features/ArticleComments'
import { Button } from '@/shared/ui/Button/Button'
import { RoutePath } from '@/shared/config/routes/routes.config'
import { Page } from '@/widgets/Page'
import { ArticleRecommendations } from '@/features/ArticleRecommendations'
import { ArticleRating } from '@/features/ArticleRating'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation()
    const navigate = useNavigate()

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    if (!id) {
        return <Page className={cls(styles.articleDetailsPage, className)}>
            {t('Статья не найдена')}
        </Page>
    }

    return (
        <Page className={cls(styles.articleDetailsPage, className)}>
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
