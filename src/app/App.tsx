import { Suspense, useEffect } from 'react'
import { AppRouter } from '@/app/providers/AppRouter'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { ErrorBoundary } from '@/app/ErrorBoundary'
import { cls } from '@/shared/lib/classNames'
import { useTheme } from '@/shared/lib/theme/useTheme'
import { useDispatch, useSelector } from 'react-redux'
import { userActions, getRouterMounted } from '@/entities/User'

const App = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const routerMounted = useSelector(getRouterMounted)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={cls('app', theme)}>
            <ErrorBoundary>
                <Suspense fallback={''}>
                    <Navbar/>
                    <div className='center'>
                        <Sidebar/>
                        {routerMounted && <AppRouter/>}
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default App
