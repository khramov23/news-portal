import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import AdminPanelPage from './AdminPanelPage'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

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

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
