import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotificationItem } from './NotificationItem'
import { notificationMock } from '../../model/mocks/notificationMock'

export default {
    title: 'entities/NotificationItem',
    component: NotificationItem
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
    notification: notificationMock
}
