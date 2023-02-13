import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { App } from 'app'
import './shared/config/i18n/i18n.config'
import { ErrorBoundary } from 'app/ErrorBoundary'

render(
    <ErrorBoundary >
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
)
