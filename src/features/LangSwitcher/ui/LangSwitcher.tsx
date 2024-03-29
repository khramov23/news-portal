import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import { cls } from '@/shared/lib/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'

import styles from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className, short }) => {
    const { t, i18n } = useTranslation()

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button theme={ButtonTheme.CLEAR} className={cls(styles.langSwitcher, className)} onClick={toggleLanguage}>
            {short ? t('Сокращенный язык') : t('Язык') }
        </Button>
    )
})
