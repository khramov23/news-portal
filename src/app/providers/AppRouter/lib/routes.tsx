import { type AppRouteProps, RoutePath } from 'shared/config/routes/routes.config'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'

export const routes: AppRouteProps[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.about, element: <AboutPage /> },
    { path: RoutePath.profile, element: <ProfilePage />, authOnly: true },
    { path: RoutePath.articles, element: <ArticlesPage />, authOnly: true },
    { path: RoutePath.article_details + ':id', element: <ArticleDetailsPage />, authOnly: true },
    { path: RoutePath.notFound, element: <NotFoundPage /> }
]
