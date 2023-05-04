import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticleDetailsPage from './ArticleDetailsPage'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'
import { articleMock } from 'entities/Article/model/mocks/article'
import { commentMock } from 'entities/Comment'
import withMock from 'storybook-addon-mock'

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        router: {
            path: '/articles/:id',
            route: '/articles/1'
        },
        mockData: [
            {
                url: `${__API__}/articles?_limit=4`,
                method: 'GET',
                response: [
                    { ...articleMock, id: '1' },
                    { ...articleMock, id: '2' },
                    { ...articleMock, id: '3' },
                    { ...articleMock, id: '4' }
                ]
            }
        ]
    },
    decorators: [withMock, StoreDecorator({
        article: {
            data: articleMock
        },
        articleComments: {
            ids: ['1', '2', '3'],
            entities: {
                1: { ...commentMock, id: '1' },
                2: { ...commentMock, id: '2' },
                3: { ...commentMock, id: '3' }
            }
        }
    })
    ]
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Green = Template.bind({})
Green.decorators = [ThemeDecorator(Theme.GREEN)]
