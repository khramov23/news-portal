import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import { cls } from '@/shared/lib/classNames'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'

import styles from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
    error?: string
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, comments, error, isLoading } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={cls(styles.commentList, className)}>
                <Skeleton className={styles.comment} width='100%' height={110} borderRadius={20} />
                <Skeleton className={styles.comment} width='100%' height={110} borderRadius={20} />
                <Skeleton className={styles.comment} width='100%' height={110} borderRadius={20} />
            </div>
        )
    }

    if (error) {
        return (
            <div className={cls(styles.commentList, className)}>
                <Text title={t('Произошла ошибка при загрузке комментариев')} />
            </div>
        )
    }

    return (
        <div className={cls(styles.commentList, className)}>
            {comments?.length
                ? comments.map(comment =>
                    <CommentCard className={styles.comment} key={comment.id} comment={comment} />
                )

                : <Text title={t('Комментарии отсутствуют')} />
            }
        </div>
    )
})
