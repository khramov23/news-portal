import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Button, ThemeButton } from './Button'

export default {
    title: 'shared/Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>

export const Clear = Template.bind({})
Clear.args = {
    theme: ThemeButton.CLEAR
}

export const Primary = Template.bind({})
Primary.args = {}

export const Outline = Template.bind({})
Outline.args = {
    theme: ThemeButton.OUTLINE
}
