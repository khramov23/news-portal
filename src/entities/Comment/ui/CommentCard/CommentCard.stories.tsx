import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentCard } from './CommentCard'
import { commentMock } from '../../model/mocks/comment'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    args: {
        comment: commentMock
    }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Green = Template.bind({})
Green.decorators = [ThemeDecorator(Theme.GREEN)]
