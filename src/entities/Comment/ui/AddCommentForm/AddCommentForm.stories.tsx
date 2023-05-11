import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AddCommentForm } from './AddCommentForm'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'

export default {
    title: 'entities/AddCommentForm',
    component: AddCommentForm
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
