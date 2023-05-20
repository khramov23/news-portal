import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react'

import { useTranslation } from 'react-i18next'

import EyeIcon from '@/shared/assets/icons/eye.svg'
import { getRouteArticleDetails } from '@/shared/config/routes/routes.config'
import { cls } from '@/shared/lib/classNames'
import { AppImage } from '@/shared/ui/AppImage'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'

import styles from './ArticleListItem.module.scss'
import { type Article, ArticleBlockType, type ArticleTextBlock, ArticleView } from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { article, className, view, target = '_self' } = props
    const { t } = useTranslation()

    const types = <Text text={article.type.join(', ')} className={styles.types} />
    const views = (
        <div className={styles.views}>
            <Text text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </div>
    )

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
                <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                    <AppImage
                        src={article.img}
                        alt={article.img}
                        className={styles.img}
                        fallback={<Skeleton width={'100%'} height={350} />}
                    />
                </AppLink>
                {textBlock && <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />}
                <div className={styles.footer}>
                    <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                        <Button>{t('Читать далее')}</Button>
                    </AppLink>
                    {views}
                </div>
            </Card>
        )
    }

    return (
        <AppLink target={target} to={getRouteArticleDetails(article.id)}>
            <Card className={cls(styles.articleListItem, className, styles[view])}>
                <div className={styles.imgWrapper}>
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={styles.img}
                        fallback={<Skeleton width={'100%'} height={200} />}
                    />
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={styles.title} />
            </Card>
        </AppLink>

    )
})
