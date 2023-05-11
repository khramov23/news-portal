import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'

export default {
    title: 'shared/Text',
    component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Title',
    text: 'Some text about something'
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'Title'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'Some text about something'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Title',
    text: 'Some text about something'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'Title'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
    text: 'Some text about something'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
    title: 'Error',
    text: 'Some text about something',
    theme: TextTheme.ERROR
}
Error.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeXL = Template.bind({})
SizeXL.args = {
    title: 'Title',
    text: 'Some text about something',
    size: 'xl'
}
