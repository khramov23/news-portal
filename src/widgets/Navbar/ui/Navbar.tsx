import React, {FC} from 'react';

import styles from './Navbar.module.scss'
import {cls} from "shared/lib/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const {t} = useTranslation()

    return (
        <div className={cls(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to='/'>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to='/about'>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
