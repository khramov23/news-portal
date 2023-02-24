import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
    title: 'shared/Button',
    args: {
        children: 'Button'
    },
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Clear = Template.bind({})
Clear.args = {
    theme: ButtonTheme.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
    theme: ButtonTheme.CLEAR_INVERTED
}

export const Primary = Template.bind({})
Primary.args = {}

export const Outline = Template.bind({})
Outline.args = {
    theme: ButtonTheme.OUTLINE
}

export const OutlineM = Template.bind({})
OutlineM.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
}

export const OutlineL = Template.bind({})
OutlineL.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
}

export const OutlineXL = Template.bind({})
OutlineXL.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
}

export const Background = Template.bind({})
Background.args = {
    theme: ButtonTheme.BACKGROUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>'
}

export const SquareM = Template.bind({})
SquareM.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
    children: '>'
}

export const SquareL = Template.bind({})
SquareL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
    children: '>'
}

export const SquareXL = Template.bind({})
SquareXL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
    children: '>'
}
