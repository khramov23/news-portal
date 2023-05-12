import { FC, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { RatingCard } from '@/entities/Rating'
import { useAuth } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

import { useGetArticleRatingQuery, useRateArticleMutation } from '../api/articleRatingApi'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
    const { className, articleId } = props

    const { t } = useTranslation()

    const userData = useAuth()

    const { data: rating, isLoading } = useGetArticleRatingQuery({
        userId: userData?.id || '',
        articleId
    })

    const [rateArticle] = useRateArticleMutation()

    const handleRateArticle = useCallback(async (stars: number, feedback?: string) => {
        try {
            await rateArticle({
                articleId,
                userId: userData?.id || '',
                stars,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [articleId, rateArticle, userData?.id])

    const onCancel = useCallback((stars: number) => {
        void handleRateArticle(stars)
    }, [handleRateArticle])

    const onAccept = useCallback((stars: number, feedback?: string) => {
        void handleRateArticle(stars, feedback)
    }, [handleRateArticle])

    if (isLoading) {
        return (
            <Skeleton width={'100%'} height={120} />
        )
    }

    const articleRating = rating?.[0]

    return (
        <RatingCard
            className={className}
            selectedStars={articleRating?.stars}
            title={t('Оцените статью')}
            feedbackTitle={t('Пожалуйста, оставьте отзыв')}
            onCancel={onCancel}
            onAccept={onAccept}
        />
    )
})

export default ArticleRating
