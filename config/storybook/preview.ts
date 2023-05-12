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
    }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(SuspenseDecorator)
// @ts-expect-error working
addDecorator(RouterDecorator)
