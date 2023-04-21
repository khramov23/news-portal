import { type FC } from 'react'

import styles from './ArticleTextBlockComponent.module.scss'
import { cls } from 'shared/lib/classNames'
import { type ArticleTextBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

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
