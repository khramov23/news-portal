import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Text, TextTheme } from './Text'

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

export const Error = Template.bind({})
Error.args = {
    title: 'Error',
    text: 'Some text about something',
    theme: TextTheme.ERROR
}

export const SizeXL = Template.bind({})
SizeXL.args = {
    title: 'Title',
    text: 'Some text about something',
    size: 'xl'
}
