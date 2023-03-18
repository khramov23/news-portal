import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Skeleton } from './Skeleton'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'

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

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    width: '100%',
    height: 300
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const AvatarDark = Template.bind({})
AvatarDark.args = {
    width: 100,
    height: 100,
    borderRadius: '50%'
}
AvatarDark.decorators = [ThemeDecorator(Theme.DARK)]
