import { type FC, memo } from 'react'

import { ArticleView } from '@/entities/Article'
import { articlesPageActions } from '@/pages/ArticlesPage'
import ListIcon from '@/shared/assets/icons/list.svg'
import TiledIcon from '@/shared/assets/icons/tiled.svg'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { cls } from '@/shared/lib/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'

import styles from './ArticlesViewSelector.module.scss'

interface ArticlesViewSelectorProps {
    className?: string
    view: ArticleView
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

export const ArticlesViewSelector: FC<ArticlesViewSelectorProps> = memo(({ className, view }) => {
    const dispatch = useAppDispatch()

    const onViewChange = (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }

    return (
        <div className={cls(styles.articlesViewSelector, className)}>
            {viewTypes.map(elem =>
                <Button key={elem.view} theme={ButtonTheme.CLEAR} onClick={() => { onViewChange(elem.view) }}>
                    <Icon Svg={elem.Icon} className={cls(styles.icon, { [styles.notSelected]: elem.view !== view })}/>
                </Button>
            )}
        </div>
    )
})
