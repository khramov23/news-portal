import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Primary = Template.bind({})
Primary.decorators = [StoreDecorator({
    user: {
        authData: {
            username: 'something',
            id: '123'
        },
        _routerMounted: true
    }
})]

export const NotAuthorized = Template.bind({})
NotAuthorized.decorators = [StoreDecorator({})]
