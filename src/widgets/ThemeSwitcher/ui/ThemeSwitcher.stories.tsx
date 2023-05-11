import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
