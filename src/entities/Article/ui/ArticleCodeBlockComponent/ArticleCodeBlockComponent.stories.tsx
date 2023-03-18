import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent'

export default {
    title: 'pages/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent
} as ComponentMeta<typeof ArticleCodeBlockComponent>

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {}
