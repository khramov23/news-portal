import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotificationList } from './NotificationList'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import withMock from 'storybook-addon-mock'
import { notificationMock } from '../../model/mocks/notificationMock'

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    decorators: [withMock, StoreDecorator({})]
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Primary = Template.bind({})
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            response: [
                { ...notificationMock, id: '1' },
                { ...notificationMock, id: '2' },
                { ...notificationMock, id: '3' },
                { ...notificationMock, id: '4' }
            ]
        }
    ]
}
