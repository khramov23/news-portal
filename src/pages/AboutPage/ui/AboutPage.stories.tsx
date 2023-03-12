import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import AboutPage from './AboutPage'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'

export default {
    title: 'pages/AboutPage',
    component: AboutPage
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
