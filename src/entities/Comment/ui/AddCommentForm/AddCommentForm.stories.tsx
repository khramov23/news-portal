import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AddCommentForm } from './AddCommentForm'

export default {
    title: 'entities/AddCommentForm',
    component: AddCommentForm
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />

export const Primary = Template.bind({})
