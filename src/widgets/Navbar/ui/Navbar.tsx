import React, {FC} from 'react';

import styles from './Navbar.module.scss'
import {cls} from "shared/lib/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={cls(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to='/'>Главная</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to='/about'>О сайте</AppLink>
            </div>
        </div>
    );
};
