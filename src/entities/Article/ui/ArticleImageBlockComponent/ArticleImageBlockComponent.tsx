import { type FC } from 'react'

import { cls } from '@/shared/lib/classNames'
import { Text } from '@/shared/ui/Text/Text'

import styles from './ArticleImageBlockComponent.module.scss'
import { type ArticleImageBlock } from '../../model/types/article'

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
