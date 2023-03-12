import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
