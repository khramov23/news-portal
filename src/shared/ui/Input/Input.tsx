import { type ChangeEvent, type FC, type InputHTMLAttributes, memo } from 'react'

import { cls } from '@/shared/lib/classNames'

import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    readonly?: boolean
    fullWidth?: boolean
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly = false,
        fullWidth,
        ...otherProps
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={cls(styles.inputWrapper, className, { [styles.fullWidth]: fullWidth })}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {placeholder + '>'}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls(styles.input,
                    {
                        [styles.readonly]: readonly
                    }
                )}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    )
})
