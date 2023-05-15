import { type FC, memo } from 'react'

import { cls } from '@/shared/lib/classNames'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'

import styles from './ArticleListItem.module.scss'
import { ArticleView } from '../../model/types/article'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props) => {
    const { className, view } = props

    if (view === ArticleView.BIG) {
        return (
            <Card className={cls(styles.articleListItem, className, styles[view])}>
                <div className={styles.header}>
                    <div className={styles.user}>
                        <Skeleton width={30} height={30} borderRadius={'50%'}/>
                        <Skeleton width={130} height={16} className={styles.username} />
                    </div>
                    <Skeleton width={110} height={16} className={styles.date} />
                </div>
                <Skeleton width={250} height={24} className={styles.title} />
                <Skeleton width={120} height={16} className={styles.types} />
                <Skeleton width={'100%'} height={300} className={styles.img}/>
                <div className={styles.footer}>
                    <Skeleton width={50} height={16} />
                </div>
            </Card>
        )
    }

    return (
        <Card className={cls(styles.articleListItem, className, styles[view])}>
            <div className={styles.imgWrapper}>
                <Skeleton width={'100%'} height={200} className={styles.img} />
            </div>
            <div className={styles.infoWrapper}>
                <Skeleton width={130} height={16} />
            </div>
            <Skeleton width={150} height={16} className={styles.title} />
        </Card>
    )
})
