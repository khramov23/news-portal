import { type ReactElement, type SVGProps } from 'react'

import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
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
    },
    {
        Icon: ArticlesIcon,
        path: RoutePath.articles,
        text: 'Статьи',
        authOnly: true
    }
]
