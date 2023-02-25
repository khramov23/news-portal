import { type ChangeEvent, type FC, type InputHTMLAttributes, memo } from 'react'

import styles from './Input.module.scss'
import { cls } from 'shared/lib/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo((props) => {
    const { className, value, onChange, type = 'text', placeholder, ...otherProps } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={cls(styles.inputWrapper, className)}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {placeholder + '>'}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={styles.input}
                {...otherProps}
            />
        </div>
    )
})
