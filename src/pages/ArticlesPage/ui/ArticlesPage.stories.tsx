import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticlesPage from './ArticlesPage'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        router: {
            route: '/articles',
            path: '/articles'
        }
    }
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Green = Template.bind({})
Green.decorators = [ThemeDecorator(Theme.GREEN)]
