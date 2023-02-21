import { type FC } from 'react'

import styles from './Navbar.module.scss'
import { cls } from 'shared/lib/classNames'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={cls(styles.navbar, className)}>
            <div className={styles.links}>

            </div>
        </div>
    )
}
