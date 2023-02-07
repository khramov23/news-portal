import { type FC } from 'react'

import styles from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
