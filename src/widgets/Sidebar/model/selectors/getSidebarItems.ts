import { createSelector } from 'reselect'

import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import MainIcon from '@/shared/assets/icons/main.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile
} from '@/shared/config/routes/routes.config'

import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const items: SidebarItemType[] = [
            {
                Icon: MainIcon,
                path: getRouteMain(),
                text: 'Главная'
            },
            {
                Icon: AboutIcon,
                path: getRouteAbout(),
                text: 'О сайте'
            }
        ]

        if (userData) {
            items.push({
                Icon: ProfileIcon,
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                authOnly: true
            },
            {
                Icon: ArticlesIcon,
                path: getRouteArticles(),
                text: 'Статьи',
                authOnly: true
            })
        }

        return items
    }
)
