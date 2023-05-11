import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import { RoutePath } from '@/shared/config/routes/routes.config'
import { createSelector } from 'reselect'
import { getUserAuthData } from '@/entities/User'
import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const items: SidebarItemType[] = [
            {
                Icon: MainIcon,
                path: RoutePath.main,
                text: 'Главная'
            },
            {
                Icon: AboutIcon,
                path: RoutePath.about,
                text: 'О сайте'
            }
        ]

        if (userData) {
            items.push({
                Icon: ProfileIcon,
                path: RoutePath.profile + userData.id,
                text: 'Профиль',
                authOnly: true
            },
            {
                Icon: ArticlesIcon,
                path: RoutePath.articles,
                text: 'Статьи',
                authOnly: true
            })
        }

        return items
    }
)
