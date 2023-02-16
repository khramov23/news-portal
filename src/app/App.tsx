import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import './styles/index.scss'
import { cls } from 'shared/lib/classNames'
import { AppRouter } from 'app/providers/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { ErrorBoundary } from 'app/ErrorBoundary'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={cls('app', theme)}>
            <ErrorBoundary>
                <Suspense fallback={''}>
                    <Navbar/>
                    <div className='center'>
                        <Sidebar/>
                        <AppRouter />
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default App
