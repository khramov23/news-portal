import { lazy, Suspense } from 'react'

import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

import { ArticleRatingProps } from './ArticleRating'

const ArticleRatingLazy = lazy(
    async () => await import('./ArticleRating')
)

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    const fallback = <Skeleton width={'100%'} height={140} />

    return (
        <Suspense fallback={fallback}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    )
}
