import { Navigate } from 'react-router'
import { RoutePath } from 'shared/config/routes/routes.config'
import { type FC, type ReactNode, useMemo } from 'react'
import { useAuth } from 'entities/User/hooks/useAuth'
import { getRoles, type UserRole } from 'entities/User'
import { useSelector } from 'react-redux'

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
        return <Navigate to={RoutePath.main} />
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} />
    }

    return <>
        {children}
    </>
}
