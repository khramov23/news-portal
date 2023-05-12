import { type FC, useCallback } from 'react'

import CopyIcon from '@/shared/assets/icons/copy.svg'
import { cls } from '@/shared/lib/classNames'

import styles from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/Button'

interface CodeProps {
    className?: string
    text: string
}

export const Code: FC<CodeProps> = ({ className, text }) => {
    const onCopy = useCallback(() => {
        void navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={cls(styles.code, className)}>
            <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={styles.button}>
                <CopyIcon className={styles.icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
}
