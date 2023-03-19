import { type Story, type StoryContext } from '@storybook/react'
import {
    BrowserRouter, MemoryRouter, Route, Routes
} from 'react-router-dom'

interface StoryContextParameters {
    router: {
        path: string
        route: string
    }
}

export function RouterDecorator (StoryComponent: Story, context: StoryContext & { parameters: StoryContextParameters }) {
    const router = context.parameters.router

    if (!router) {
        return <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    }

    const { route, path } = router

    return (
        <MemoryRouter initialEntries={[encodeURI(route)]}>
            <Routes>
                <Route path={path} element={<StoryComponent />} />
            </Routes>
        </MemoryRouter>
    )
}
