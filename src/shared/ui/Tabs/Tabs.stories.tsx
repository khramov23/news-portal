import { action } from '@storybook/addon-actions'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Tabs } from './Tabs'

export default {
    title: 'shared/Tabs',
    component: Tabs,
    args: {
        items: [
            {
                value: 'value 1',
                content: 'it'
            },
            {
                value: 'value 2',
                content: 'cars'
            },
            {
                value: 'value 3',
                content: 'animals'
            }
        ],
        value: 'value 2',
        onTabClick: action('tabClick')
    }
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Primary = Template.bind({})
