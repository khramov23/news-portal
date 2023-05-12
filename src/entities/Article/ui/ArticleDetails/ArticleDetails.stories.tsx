import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

import { ArticleDetails } from './ArticleDetails'
import { articleMock } from '../../model/mocks/article'
import { type ArticleSchema } from '../../model/types/articleSchema'

export default {
    title: 'entities/Article/ArticleDetails',
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
