import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'

import { CommentCard } from './CommentCard'
import { commentMock } from '../../model/mocks/comment'

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    args: {
        comment: commentMock
    }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Primary = Template.bind({})
