import { type ReactElement, type SVGProps } from 'react'

import MainIcon from 'shared/assets/main.svg'
import AboutIcon from 'shared/assets/about.svg'
import ProfileIcon from 'shared/assets/profile.svg'
import { RoutePath } from 'shared/config/routes/routes.config'

export interface SidebarItemType {
    path: string
    Icon: (props: SVGProps<SVGElement>) => ReactElement
    text: string
    authOnly?: boolean
}

export const sidebarItems: SidebarItemType[] = [
    {
        Icon: MainIcon,
        path: RoutePath.main,
        text: 'Главная'
    },
    {
        Icon: AboutIcon,
        path: RoutePath.about,
        text: 'О сайте'
    },
    {
        Icon: ProfileIcon,
        path: RoutePath.profile,
        text: 'Профиль',
        authOnly: true
    }
]
