import { type FC, type ReactNode, useMemo } from 'react'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

import { useAuth } from '@/entities/User'
import { getRoles, type UserRole } from '@/entities/User'
import { getRouteForbidden, getRouteMain } from '@/shared/config/routes/routes.config'

interface RequireAuthProps {
    children?: ReactNode
    roles?: UserRole[]
}

export const RequireAuth: FC<RequireAuthProps> = (props) => {
    const { roles, children } = props

    const auth = useAuth()
    const userRoles = useSelector(getRoles)

    const hasRequiredRoles = useMemo(() => {
        if (!roles) { return true }
        return roles.some(role => userRoles?.includes(role))
    }, [roles, userRoles])

    if (!auth) {
        return <Navigate to={getRouteMain()} />
    }

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} />
    }

    return <>
        {children}
    </>
}
