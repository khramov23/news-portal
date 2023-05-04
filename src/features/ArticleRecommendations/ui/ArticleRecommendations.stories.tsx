import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleRecommendations } from './ArticleRecommendations'
import withMock from 'storybook-addon-mock'
import { articleMock } from 'entities/Article'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'features/ArticleRecommendations',
    component: ArticleRecommendations,
    decorators: [withMock, StoreDecorator({})]

} as ComponentMeta<typeof ArticleRecommendations>

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => <ArticleRecommendations {...args} />

export const Primary = Template.bind({})

Primary.parameters = {
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
}
