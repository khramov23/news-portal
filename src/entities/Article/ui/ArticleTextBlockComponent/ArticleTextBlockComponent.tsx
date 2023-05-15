import { type FC } from 'react'

import { cls } from '@/shared/lib/classNames'
import { Text } from '@/shared/ui/Text'

import styles from './ArticleTextBlockComponent.module.scss'
import { type ArticleTextBlock } from '../../model/types/article'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props) => {
    const { className, block } = props

    return (
        <div className={cls(styles.articleTextBlockComponent, className)}>
            <Text className={styles.title} title={block.title} />
            {block.paragraphs.map(paragraph =>
                <Text className={styles.paragraph} key={paragraph} text={paragraph} />
            )}
        </div>
    )
}
