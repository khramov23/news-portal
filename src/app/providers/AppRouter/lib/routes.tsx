import { UserRole } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { type AppRouteProps, RoutePath } from '@/shared/config/routes/routes.config'

export const routes: AppRouteProps[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.about, element: <AboutPage /> },
    { path: RoutePath.profile + ':id', element: <ProfilePage />, authOnly: true },
    { path: RoutePath.articles, element: <ArticlesPage />, authOnly: true },
    { path: RoutePath.article_details + ':id', element: <ArticleDetailsPage />, authOnly: true },
    { path: RoutePath.admin_panel, element: <AdminPanelPage />, authOnly: true, roles: [UserRole.ADMIN, UserRole.MANAGER] },
    { path: RoutePath.forbidden, element: <ForbiddenPage /> },
    { path: RoutePath.notFound, element: <NotFoundPage /> }
]
