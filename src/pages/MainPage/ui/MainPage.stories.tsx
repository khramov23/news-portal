import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

import MainPage from './MainPage'

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

export const Primary = Template.bind({})
