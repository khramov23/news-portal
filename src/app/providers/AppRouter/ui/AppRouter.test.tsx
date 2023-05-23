import { screen } from '@testing-library/react'

import { UserRole } from '@/entities/User'
import { getRouteAbout, getRouteAdmin, getRouteArticles, getRouteMain } from '@/shared/config/routes/routes.config'
import { componentRender } from '@/shared/lib/tests/componentRender'

import { AppRouter } from './AppRouter'

describe('AppRouter', () => {
    test('Рендерится главная страница', async () => {
        componentRender(<AppRouter />, {
            initialPath: getRouteMain()
        })
        const page = await screen.findByTestId('MainPage')

        expect(page).toBeInTheDocument()
    })

    test('Рендерится страница о сайте', async () => {
        componentRender(<AppRouter />, {
            initialPath: getRouteAbout()
        })
        const page = await screen.findByTestId('AboutPage')

        expect(page).toBeInTheDocument()
    })

    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            initialPath: '/something_in_the_way'
        })
        const page = await screen.findByTestId('NotFoundPage')

        expect(page).toBeInTheDocument()
    })

    test('Редирект на главную у неавторизованного пользователя', async () => {
        componentRender(<AppRouter />, {
            initialPath: getRouteArticles()
        })
        const page = await screen.findByTestId('MainPage')

        expect(page).toBeInTheDocument()
    })

    test('Доступ запрещен (отсутствует роль)', async () => {
        componentRender(<AppRouter />, {
            initialPath: getRouteAdmin(),
            initialState: {
                user: {
                    authData: { id: '1', username: 'Some User', roles: [UserRole.USER] }
                }
            }
        })
        const page = await screen.findByTestId('ForbiddenPage')

        expect(page).toBeInTheDocument()
    })

    test('Доступ разрешен (присутствует нужна роль)', async () => {
        componentRender(<AppRouter />, {
            initialPath: getRouteAdmin(),
            initialState: {
                user: {
                    authData: { id: '1', username: 'Some User', roles: [UserRole.ADMIN] }
                }
            }
        })
        const page = await screen.findByTestId('AdminPanelPage')

        expect(page).toBeInTheDocument()
    })
})
