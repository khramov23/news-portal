import { type FC } from 'react'

import styles from './ArticleImageBlockComponent.module.scss'
import { cls } from 'shared/lib/classNames'
import { type ArticleImageBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props) => {
    const { className, block } = props

    return (
        <div className={cls(styles.articleImageBlockComponent, className)}>
            <img className={styles.img} src={block.src} alt=""/>
            <Text text={block.subtitle} align='center' />
        </div>
    )
}
