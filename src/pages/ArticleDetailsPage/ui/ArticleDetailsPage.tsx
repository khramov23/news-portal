import { type FC, useCallback } from 'react'

import styles from './ArticleDetailsPage.module.scss'
import { cls } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router'
import { Text } from 'shared/ui/Text/Text'
import { ArticleCommentList } from 'features/ArticleComments/ui/ArticleCommentList/ArticleCommentList'
import { ArticleCommentsForm } from 'features/ArticleComments'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routes/routes.config'

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
        return <div className={cls(styles.articleDetailsPage, className)}>
            {t('Статья не найдена')}
        </div>
    }

    return (
        <div className={cls(styles.articleDetailsPage, className)}>
            <Button onClick={onBackToList}>{t('Вернуться к списку')}</Button>
            <ArticleDetails id={id} />
            <Text className={styles.commentTitle} title={t('Комментарии')} />
            <ArticleCommentsForm />
            <ArticleCommentList articleId={id} />
        </div>
    )
}

export default ArticleDetailsPage
