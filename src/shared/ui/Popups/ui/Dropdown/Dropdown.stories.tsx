import { type ComponentMeta, type ComponentStory } from '@storybook/react'

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

export const Primary = Template.bind({})
