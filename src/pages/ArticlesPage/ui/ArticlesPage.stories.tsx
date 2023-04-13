import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticlesPage from './ArticlesPage'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { articleMock } from 'entities/Article'

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        router: {
            route: '/articles',
            path: '/articles'
        }
    },
    decorators: [StoreDecorator({
        articlesPage: {
            ids: [1, 2, 3, 4, 5, 6, 7],
            entities: {
                1: { ...articleMock, id: '1' },
                2: { ...articleMock, id: '2' },
                3: { ...articleMock, id: '3' },
                4: { ...articleMock, id: '4' },
                5: { ...articleMock, id: '5' },
                6: { ...articleMock, id: '6' },
                7: { ...articleMock, id: '7' }
            }
        }
    })]
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Green = Template.bind({})
Green.decorators = [ThemeDecorator(Theme.GREEN)]
