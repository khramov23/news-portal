import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import { ArticleList, ArticleView } from '@/entities/Article'
import { Text } from '@/shared/ui/Text'

import { useGetArticleRecommendationsQuery } from '../api/articleRecommendationsApi'

interface ArticleRecommendationsProps {
    className?: string
}

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo(({ className }) => {
    const { data: recommendations, isLoading, error } = useGetArticleRecommendationsQuery(4)
    const { t } = useTranslation()

    return (
        <div className={className} data-testid='ArticleRecommendations'>
            <Text title={t('Рекомендации')} />
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
