import { type ButtonHTMLAttributes, type FC, memo } from 'react'

import { cls } from '@/shared/lib/classNames'

import styles from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_ERROR = 'outlineError',
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
    fullWidth?: boolean
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        square,
        disabled,
        fullWidth = false,
        ...otherProps
    } = props

    const classes = cls(
        styles.button,
        className,
        styles[theme],
        {
            [styles.square]: square,
            [styles.disabled]: disabled,
            [styles.fullWidth]: fullWidth
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
})
