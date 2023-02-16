import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args}>AppLink</AppLink>

export const Primary = Template.bind({})
Primary.args = {
    theme: AppLinkTheme.PRIMARY
}

export const Inverted = Template.bind({})
Inverted.args = {
    theme: AppLinkTheme.INVERTED
}

export const PrimaryDark = Template.bind({})
Primary.args = {
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertedDark = Template.bind({})
Inverted.args = {
    theme: AppLinkTheme.INVERTED
}
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]
