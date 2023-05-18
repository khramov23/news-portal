import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { articleMock } from '@/entities/Article'
import { commentMock } from '@/entities/Comment'
import { articleRatingMock } from '@/features/ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

import ArticleDetailsPage from './ArticleDetailsPage'

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
            },
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                response: [articleRatingMock]
            },
            {
                url: `${__API__}/article-ratings`,
                method: 'POST'
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
        },
        user: {
            authData: {
                id: '1'
            }
        }
    })
    ]
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />

export const Primary = Template.bind({})
