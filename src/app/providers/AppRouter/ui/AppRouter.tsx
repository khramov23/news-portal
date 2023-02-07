import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../lib/routes'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({ path, element }) =>
                <Route key={path} path={path} element={
                    <Suspense fallback={<PageLoader />}>
                        <div className='page-wrapper'>
                            {element}
                        </div>
                    </Suspense>
                }/>
            )}
        </Routes>
    )
}
