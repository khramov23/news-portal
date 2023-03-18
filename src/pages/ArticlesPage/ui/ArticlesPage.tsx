import { type FC, memo } from 'react'

import styles from './ArticlesPage.module.scss'
import { cls } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation('articles')

    return (
        <div className={cls(styles.articlesPage, className)}>
            {t('Страница статей')}
        </div>
    )
}

export default memo(ArticlesPage)
