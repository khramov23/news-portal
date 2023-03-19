import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { type ArticleSchema } from 'entities/Article'
import { articleMock } from '../../model/mocks/article'

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />

const articleState: DeepPartial<ArticleSchema> = {
    data: articleMock
}

export const Primary = Template.bind({})
Primary.decorators = [StoreDecorator({
    article: articleState
})]

export const Loading = Template.bind({})
Loading.decorators = [StoreDecorator({
    article: {
        isLoading: true
    }
})]

export const Error = Template.bind({})
Error.decorators = [StoreDecorator({
    article: {
        error: 'error'
    }
})]
