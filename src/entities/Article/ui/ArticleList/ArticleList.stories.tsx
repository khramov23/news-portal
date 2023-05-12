import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleList } from './ArticleList'
import { articleMock } from '../../model/mocks/article'
import { ArticleView } from '../../model/types/article'

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
    articles: new Array(12)
        .fill(articleMock),
    view: ArticleView.SMALL
}

export const LoadingSmall = Template.bind({})
LoadingSmall.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL
}

export const PrimaryBig = Template.bind({})
PrimaryBig.args = {
    articles: new Array(12)
        .fill(articleMock),
    view: ArticleView.BIG
}

export const LoadingBig = Template.bind({})
LoadingBig.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG
}

export const Empty = Template.bind({})
Empty.args = {
    articles: []
}
