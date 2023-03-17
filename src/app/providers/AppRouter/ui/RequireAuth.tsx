import { Navigate } from 'react-router'
import { RoutePath } from 'shared/config/routes/routes.config'
import { type FC, type ReactNode } from 'react'
import { useAuth } from 'entities/User/hooks/useAuth'

interface RequireAuthProps {
    children?: ReactNode
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const auth = useAuth()

    if (!auth) {
        return <Navigate to={RoutePath.main} />
    }

    return <>
        {children}
    </>
}
