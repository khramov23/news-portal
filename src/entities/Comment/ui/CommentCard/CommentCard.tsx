import { type FC, memo } from 'react'

import { RoutePath } from '@/shared/config/routes/routes.config'
import { cls } from '@/shared/lib/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'

import styles from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'

interface CommentCardProps {
    className?: string
    comment: Comment
}

export const CommentCard: FC<CommentCardProps> = memo(({ className, comment }) => {
    return (
        <div className={cls(styles.commentCard, className)}>
            <AppLink to={RoutePath.profile + comment.user.id} className={styles.userInfo}>
                { comment.user.avatar && <Avatar size={40} src={comment.user.avatar} />}
                <Text className={styles.username} title={comment.user.username} />
            </AppLink>
            <Text className={styles.text} text={comment.text} />
        </div>
    )
})
