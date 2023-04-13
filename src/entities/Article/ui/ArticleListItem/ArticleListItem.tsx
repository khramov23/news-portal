import { type FC, memo, useCallback } from 'react'

import styles from './ArticleListItem.module.scss'
import { cls } from 'shared/lib/classNames'
import { type Article, ArticleBlockType, type ArticleTextBlock, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'

import EyeIcon from 'shared/assets/icons/eye.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router'
import { RoutePath } from 'shared/config/routes/routes.config'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { article, className, view } = props
    const { t } = useTranslation()
    const navigate = useNavigate()

    const types = <Text text={article.type.join(', ')} className={styles.types} />
    const views = (
        <div className={styles.views}>
            <Text text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </div>
    )

    const onOpenArticleDetails = useCallback(() => {
        navigate(RoutePath.article_details + article.id)
    }, [article.id, navigate])

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

        return (
            <Card className={cls(styles.articleListItem, className, styles[view])}>
                <div className={styles.header}>
                    <div className={styles.user}>
                        <Avatar src={article.user.avatar} size={30}/>
                        <Text text={article.user.username} className={styles.username} />
                    </div>
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <Text title={article.title} className={styles.title} />
                {types}
                <img onClick={onOpenArticleDetails} src={article.img} alt={article.img} className={styles.img}/>
                {textBlock && <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />}
                <div className={styles.footer}>
                    <Button onClick={onOpenArticleDetails}>{t('Читать далее')}</Button>
                    {views}
                </div>
            </Card>
        )
    }

    return (
        <Card onClick={onOpenArticleDetails} className={cls(styles.articleListItem, className, styles[view])}>
            <div className={styles.imgWrapper}>
                <img src={article.img} alt={article.title} className={styles.img}/>
                <Text text={article.createdAt} className={styles.date} />
            </div>
            <div className={styles.infoWrapper}>
                {types}
                {views}
            </div>
            <Text text={article.title} className={styles.title} />
        </Card>
    )
})
