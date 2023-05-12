import { type ChangeEvent, useMemo } from 'react'

import { cls } from '@/shared/lib/classNames'

import styles from './Select.module.scss'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    value?: T
    onChange?: (value: T) => void
    options?: Array<SelectOption<T>>
    readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props

    const optionsList = useMemo(() => options?.map(opt =>
        <option
            className={styles.option}
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    ), [options])

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    return (
        <div className={cls(styles.wrapper, className)}>
            {label && (
                <div className={styles.label}>
                    {label + '>'}
                </div>
            )}
            <select
                disabled={readonly}
                className={cls(styles.select, { [styles.readonly]: readonly })}
                value={value}
                onChange={onSelectChange}
            >
                {optionsList}
            </select>
        </div>
    )
}
