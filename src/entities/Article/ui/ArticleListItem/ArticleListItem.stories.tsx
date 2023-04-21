import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleListItem } from './ArticleListItem'
import { articleMock } from '../../model/mocks/article'
import { ArticleView } from '../../model/types/article'

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />

export const Small = Template.bind({})
Small.args = {
    view: ArticleView.SMALL,
    article: articleMock
}

export const Big = Template.bind({})
Big.args = {
    view: ArticleView.BIG,
    article: articleMock
}
