import { Suspense } from 'react'
import { AppRouter } from 'app/providers/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { ErrorBoundary } from 'app/ErrorBoundary'
import { cls } from 'shared/lib/classNames'
import { useTheme } from 'shared/lib/theme/useTheme'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={cls('app', theme)}>
            <ErrorBoundary>
                <Suspense fallback={''}>
                    <Navbar/>
                    <div className='center'>
                        <Sidebar/>
                        <AppRouter/>
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default App
