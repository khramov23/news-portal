import { addDecorator } from '@storybook/react'

import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorator'
import { StyleDecorator } from '@/shared/config/storybook/decorators/StyleDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/decorators/SuspenseDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', Theme.LIGHT], color: '#fff' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#15156d' },
            { name: 'green', class: ['app', Theme.GREEN], color: '#2ecd2e' }
        ]
    }
}

addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(StyleDecorator)
addDecorator(SuspenseDecorator)
// @ts-expect-error working
addDecorator(RouterDecorator)
