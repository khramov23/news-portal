import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import avatarSrc from './avatar.jpg'
import { Avatar } from './Avatar'

export default {
    title: 'shared/Avatar',
    args: {
        children: 'Avatar'
    },
    component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: avatarSrc
}

export const Big = Template.bind({})
Big.args = {
    src: avatarSrc,
    size: 200
}

export const Small = Template.bind({})
Small.args = {
    src: avatarSrc,
    size: 50
}
