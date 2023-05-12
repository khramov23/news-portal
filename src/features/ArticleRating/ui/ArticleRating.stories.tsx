import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import withMock from 'storybook-addon-mock'
import { articleRatingMock } from '../model/mocks/articleRatingMock'

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    args: {
        articleId: '1'
    },
    decorators: [withMock, StoreDecorator({
        user: {
            authData: {
                id: '1'
            }
        }
    })],
    parameters: {
        mockData: [
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
    }
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />

export const Primary = Template.bind({})
