import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import LoginForm from './LoginForm'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'features/LoginForm',
    component: LoginForm
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123'
    }
})]

export const PrimaryError = Template.bind({})
PrimaryError.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        error: 'Неправильный логин или пароль'
    }
})]

export const PrimaryLoading = Template.bind({})
PrimaryLoading.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true
    }
})]
