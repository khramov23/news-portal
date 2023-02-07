import { type RouteProps } from 'react-router-dom'
import { RoutePath } from 'shared/config/routes/routes.config'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export const routes: RouteProps[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.about, element: <AboutPage /> },
    { path: RoutePath.notFound, element: <NotFoundPage /> }
]
