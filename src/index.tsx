import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { App } from 'app'
import './shared/config/i18n/i18n.config'
import { ErrorBoundary } from 'app/ErrorBoundary'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
