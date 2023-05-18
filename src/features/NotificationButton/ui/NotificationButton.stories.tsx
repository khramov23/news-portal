import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

import { NotificationButton } from './NotificationButton'

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof NotificationButton>

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    className: 'flex'
}
