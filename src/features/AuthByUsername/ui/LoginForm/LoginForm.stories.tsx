import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/lib/theme/ThemeContext'

export default {
    title: 'features/LoginForm',
    component: LoginForm
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
