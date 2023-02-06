import {FC} from 'react';

import styles from './LangSwitcher.module.scss'
import {cls} from "shared/lib/classNames";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const {t, i18n} = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button theme={ThemeButton.CLEAR} className={cls(styles.langSwitcher, className)} onClick={toggleLanguage}>
            {t('Язык')}
        </Button>
    );
};
