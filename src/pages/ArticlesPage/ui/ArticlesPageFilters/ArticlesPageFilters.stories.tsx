import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleSortType, ArticleView } from '@/entities/Article'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

import { ArticlesPageFilters } from './ArticlesPageFilters'

export default {
    title: 'pages/ArticlesPageFilters',
    component: ArticlesPageFilters,
    decorators: [StoreDecorator({
        articlesPage: {
            sort: ArticleSortType.VIEWS,
            search: 'something in the way',
            order: 'desc',
            view: ArticleView.SMALL
        }
    })]
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />

export const Primary = Template.bind({})
Primary.args = {}
