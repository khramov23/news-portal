import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'

import { Dropdown } from './Dropdown'

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    decorators: [
        Story => <div style={{ padding: 200 }}><Story /></div>
    ],
    args: {
        trigger: 'Something in the way',
        items: [
            { content: 'Выйти' },
            { content: 'Профиль' }
        ]
    }
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Green = Template.bind({})
Green.decorators = [ThemeDecorator(Theme.GREEN)]
