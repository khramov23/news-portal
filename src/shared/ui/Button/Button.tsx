import { type ButtonHTMLAttributes, type FC } from 'react'

import styles from './Button.module.scss'
import { cls } from 'shared/lib/classNames'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props

    return (
        <button className={cls(styles.button, className, styles[theme])} {...otherProps}>
            {children}
        </button>
    )
}