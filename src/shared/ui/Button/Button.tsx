import { type ButtonHTMLAttributes, type FC } from 'react'

import styles from './Button.module.scss'
import { cls } from 'shared/lib/classNames'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    XL = 'xl',
    L = 'l',
    M = 'm'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, size, square, disabled, ...otherProps } = props

    const classes = cls(
        styles.button,
        className,
        styles[theme],
        {
            [styles.square]: square,
            [styles.disabled]: disabled
        },
        styles[size]
    )

    return (
        <button
            className={classes}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
}
