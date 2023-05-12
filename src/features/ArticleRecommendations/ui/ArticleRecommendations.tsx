import { type FC, memo } from 'react'
import { ArticleList, ArticleView } from '@/entities/Article'
import { useGetArticleRecommendationsQuery } from '../api/articleRecommendationsApi'
import { Text } from '@/shared/ui/Text/Text'
import styles from '@/pages/ArticleDetailsPage/ui/ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticleRecommendationsProps {
    className?: string
}

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo(({ className }) => {
    const { data: recommendations, isLoading, error } = useGetArticleRecommendationsQuery(4)
    const { t } = useTranslation()

    return (
        <div className={className}>
            <Text className={styles.commentTitle} title={t('Рекомендации')} />
            <ArticleList
                articles={recommendations}
                view={ArticleView.ROW}
                isLoading={isLoading}
                error={error}
                target={'_blank'}
            />
        </div>

    )
})
