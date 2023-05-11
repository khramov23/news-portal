import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [StoreDecorator({
        scroll: {
            '/404': 0
        }
    })]
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
