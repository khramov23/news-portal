import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ListBox } from './ListBox'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'

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
    }
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Green = Template.bind({})
Green.decorators = [ThemeDecorator(Theme.GREEN)]
