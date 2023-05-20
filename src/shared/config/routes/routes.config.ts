import { type RouteProps } from 'react-router-dom'

// eslint-disable-next-line khramov-fsd/layer-imports
import { type UserRole } from '@/entities/User'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
