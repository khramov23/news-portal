import { type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

interface ForbiddenPageProps {
    className?: string
}

export const ForbiddenPage: FC<ForbiddenPageProps> = () => {
    const { t } = useTranslation()

    return (
        <Page data-testid={'ForbiddenPage'}>
            {t('Доступ запрещен')}
        </Page>
    )
}
