import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { App } from 'app'
import './shared/config/i18n/i18n.config'
import 'app/styles/index.scss'
import { StoreProvider } from 'app/providers/StoreProvider'

import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')

if (!container) {
    throw new Error('Контейнер не найден, невозможно вмонтировать react-приложение')
}

const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <StoreProvider>
                <App/>
            </StoreProvider>
        </ThemeProvider>
    </BrowserRouter>
)
