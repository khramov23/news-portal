import { type FC } from 'react'

import styles from './ArticleDetailsPage.module.scss'
import { cls } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation('article_details')

    return (
        <div className={cls(styles.articleDetailsPage, className)}>
            {t('Страница конкретной статьи')}
        </div>
    )
}

export default ArticleDetailsPage
