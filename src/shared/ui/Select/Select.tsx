import { type ChangeEvent, type FC, memo, useMemo } from 'react'

import styles from './Select.module.scss'
import { cls } from 'shared/lib/classNames'

interface SelectProps {
    className?: string
    label?: string
    value?: string
    onChange?: (value: string) => void
    options?: string[]
    readonly?: boolean
}

export const Select: FC<SelectProps> = memo((props) => {
    const { className, label, options, value, onChange, readonly } = props

    const optionsList = useMemo(() => options?.map(opt =>
        <option className={styles.option} key={opt}>{opt}</option>
    ), [options])

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={cls(styles.wrapper, className)}>
            {label && (
                <div className={styles.label}>
                    {label + '>'}
                </div>
            )}
            <select disabled={readonly} className={cls(styles.select, { [styles.readonly]: readonly })} value={value} onChange={onSelectChange}>
                {optionsList}
            </select>
        </div>
    )
})
