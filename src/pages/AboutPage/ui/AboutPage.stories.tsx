import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

import AboutPage from './AboutPage'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    decorators: [StoreDecorator({
        scroll: {
            '/about': 0
        }
    })]
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Primary = Template.bind({})
