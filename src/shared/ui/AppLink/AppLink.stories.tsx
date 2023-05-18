import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'AppLink'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    theme: AppLinkTheme.PRIMARY
}

export const Inverted = Template.bind({})
Inverted.args = {
    theme: AppLinkTheme.INVERTED
}
