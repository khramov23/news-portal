import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Primary = Template.bind({})
