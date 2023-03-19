import { type FC } from 'react'

import styles from './ArticleDetailsPage.module.scss'
import { cls } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router'
import { Text } from 'shared/ui/Text/Text'
import { ArticleCommentList } from 'features/ArticleComments/ui/ArticleCommentList/ArticleCommentList'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation('article_details')

    if (!id) {
        return <div className={cls(styles.articleDetailsPage, className)}>
            {t('Статья не найдена')}
        </div>
    }

    return (
        <div className={cls(styles.articleDetailsPage, className)}>
            <ArticleDetails id={id} />
            <Text className={styles.commentTitle} title={t('Комментарии')} />
            <ArticleCommentList articleId={id} />
        </div>
    )
}

export default ArticleDetailsPage
