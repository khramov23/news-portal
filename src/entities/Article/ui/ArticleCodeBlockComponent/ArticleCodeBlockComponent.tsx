import { type FC } from 'react'
import { type ArticleCodeBlock } from 'entities/Article/model/types/article'
import { Code } from 'shared/ui/Code/Code'
import { cls } from 'shared/lib/classNames'
import styles from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props) => {
    const { className, block } = props

    return (
        <div className={cls(styles.articleCodeBlockComponent, className)}>
            <Code text={block.code} />
        </div>
    )
}
