import { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'

import { type AppRouteProps } from '@/shared/config/routes/routes.config'
import { PageLoader } from '@/widgets/PageLoader'

import { RequireAuth } from './RequireAuth'
import { routes } from '../lib/routes'

const renderWithAuth = (route: AppRouteProps) => {
    const { element, authOnly } = route

    const elem = <Suspense fallback={<PageLoader/>}>
        {element}
    </Suspense>

    return authOnly ? <RequireAuth roles={route.roles}>{elem}</RequireAuth> : elem
}

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) =>
                <Route key={route.path} path={route.path} element={renderWithAuth(route)}/>
            )}
        </Routes>
    )
}
