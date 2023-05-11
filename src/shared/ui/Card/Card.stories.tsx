import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Card } from './Card'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'

export default {
    title: 'shared/Card',
    component: Card,
    args: {
        children: 'something inside'
    }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Green = Template.bind({})
Green.decorators = [ThemeDecorator(Theme.GREEN)]
