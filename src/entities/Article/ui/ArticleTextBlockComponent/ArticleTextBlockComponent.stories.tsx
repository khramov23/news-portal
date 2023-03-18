import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent'

export default {
    title: 'pages/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent
} as ComponentMeta<typeof ArticleTextBlockComponent>

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {}
