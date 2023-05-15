import { type FC, memo, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { cls } from '@/shared/lib/classNames'
import { type Order } from '@/shared/types/sort'
import { Select, type SelectOption } from '@/shared/ui/Select/Select'

import styles from './ArticlesSortSelectors.module.scss'
import { ArticleSortType } from '../../model/types/article'

interface ArticlesSortSelectorsProps {
    className?: string
    sort: ArticleSortType
    order: Order
    onChangeSort: (value: ArticleSortType) => void
    onChangeOrder: (value: Order) => void
}

export const ArticlesSortSelectors: FC<ArticlesSortSelectorsProps> = memo((props) => {
    const { className, sort, onChangeSort, onChangeOrder, order } = props

    const { t } = useTranslation()

    const orderOptions = useMemo<Array<SelectOption<Order>>>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])
    const sortOptions = useMemo<Array<SelectOption<ArticleSortType>>>(() => [
        {
            value: ArticleSortType.DATE,
            content: t('дате')
        },
        {
            value: ArticleSortType.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortType.VIEWS,
            content: t('просмотрам')
        }
    ], [t])

    return (
        <div className={cls(styles.articlesSortSelectors, className)}>
            <Select
                label={t('Сортировать по')}
                options={sortOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('По')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    )
})
