import { type FC } from 'react'

import { cls } from '@/shared/lib/classNames'
import { Code } from '@/shared/ui/Code/Code'

import { type ArticleCodeBlock } from '../../model/types/article'

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
