import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import MainPage from './MainPage'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    decorators: [StoreDecorator({
        scroll: {
            '/main': 0
        }
    })]
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
