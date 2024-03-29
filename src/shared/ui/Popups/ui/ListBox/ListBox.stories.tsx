import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    args: {
        label: 'Выберите валюту',
        value: 'first',
        items: [
            { value: 'first', content: 'first' },
            { value: 'second', content: 'second' },
            { value: 'third', content: 'third' },
            { value: 'uno', content: 'uno' }
        ]
    },
    decorators: [
        Story => <div style={{ padding: 200 }}><Story /></div>
    ]
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Primary = Template.bind({})
