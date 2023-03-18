import { type RouteProps } from 'react-router-dom'

export type AppRouteProps = RouteProps & { authOnly?: boolean }

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'notFound',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.NOT_FOUND]: '*'
}
