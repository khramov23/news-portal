import { type FC, memo } from 'react'

import ListIcon from '@/shared/assets/icons/list.svg'
import TiledIcon from '@/shared/assets/icons/tiled.svg'
import { cls } from '@/shared/lib/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'

import styles from './ArticlesViewSelector.module.scss'
import { ArticleView } from '../../model/types/article'

interface ArticlesViewSelectorProps {
    className?: string
    view: ArticleView
    onChangeView: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        Icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        Icon: ListIcon
    }
]

export const ArticlesViewSelector: FC<ArticlesViewSelectorProps> = memo((props) => {
    const { className, view, onChangeView } = props

    const handleViewChange = (view: ArticleView) => () => {
        onChangeView(view)
    }

    return (
        <div className={cls(styles.articlesViewSelector, className)}>
            {viewTypes.map(elem =>
                <Button key={elem.view} theme={ButtonTheme.CLEAR} onClick={handleViewChange(elem.view)}>
                    <Icon Svg={elem.Icon} className={cls(styles.icon, { [styles.notSelected]: elem.view !== view })}/>
                </Button>
            )}
        </div>
    )
})
