import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

import AdminPanelPage from './AdminPanelPage'

export default {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    decorators: [StoreDecorator({
        scroll: {
            '/about': 0
        }
    })]
} as ComponentMeta<typeof AdminPanelPage>

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />

export const Primary = Template.bind({})
