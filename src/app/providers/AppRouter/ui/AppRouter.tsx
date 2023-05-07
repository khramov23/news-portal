import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../lib/routes'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
import { type AppRouteProps } from 'shared/config/routes/routes.config'
import { RequireAuth } from './RequireAuth'

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
