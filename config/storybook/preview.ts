import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '@/shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/decorators/SuspenseDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(SuspenseDecorator)
// @ts-expect-error working
addDecorator(RouterDecorator)
