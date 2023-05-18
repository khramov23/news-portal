import { UserRole } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import {
    type AppRouteProps,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleDetails,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile
} from '@/shared/config/routes/routes.config'

export const routes: AppRouteProps[] = [
    { path: getRouteMain(), element: <MainPage /> },
    { path: getRouteAbout(), element: <AboutPage /> },
    { path: getRouteProfile(':id'), element: <ProfilePage />, authOnly: true },
    { path: getRouteArticles(), element: <ArticlesPage />, authOnly: true },
    { path: getRouteArticleDetails(':id'), element: <ArticleDetailsPage />, authOnly: true },
    { path: getRouteAdmin(), element: <AdminPanelPage />, authOnly: true, roles: [UserRole.ADMIN, UserRole.MANAGER] },
    { path: getRouteForbidden(), element: <ForbiddenPage /> },
    { path: '*', element: <NotFoundPage /> }
]
