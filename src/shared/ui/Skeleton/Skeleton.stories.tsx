import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Skeleton } from './Skeleton'

export default {
    title: 'shared/Skeleton',
    component: Skeleton
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    width: '100%',
    height: 300
}

export const Avatar = Template.bind({})
Avatar.args = {
    width: 100,
    height: 100,
    borderRadius: '50%'
}
