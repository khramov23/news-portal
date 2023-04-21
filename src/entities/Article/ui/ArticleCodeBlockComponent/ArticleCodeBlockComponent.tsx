import { type FC } from 'react'
import { type ArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'
import { cls } from 'shared/lib/classNames'

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props) => {
    const { className, block } = props

    return (
        <div className={cls(className)}>
            <Code text={block.code} />
        </div>
    )
}
