import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/app'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import './shared/config/i18n/i18n.config'
import '@/app/styles/index.scss'

const container = document.getElementById('root')

if (!container) {
    throw new Error('Контейнер не найден, невозможно вмонтировать react-приложение')
}

const root = createRoot(container)
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <StoreProvider>
                <App/>
            </StoreProvider>
        </ThemeProvider>
    </BrowserRouter>
)
