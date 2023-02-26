import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: [
        StoreDecorator({
            user: {}
        })
    ]
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Authorized = Template.bind({})
Authorized.decorators = [
    StoreDecorator({
        user: { authData: { id: '1', name: 'admin' } }
    })
]
