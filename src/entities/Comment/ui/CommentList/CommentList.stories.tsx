import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentList } from './CommentList'
import { commentMock } from '../../model/mocks/comment'

export default {
    title: 'entities/CommentList',
    component: CommentList
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Primary = Template.bind({})
Primary.args = {
    comments: new Array(3).fill(commentMock)
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}

export const Error = Template.bind({})
Error.args = {
    error: 'some error'
}

export const EmptyComments = Template.bind({})
EmptyComments.args = {
    comments: []
}
