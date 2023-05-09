import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Drawer } from './Drawer'

export default {
    title: 'shared/Drawer',
    component: Drawer
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Oh hello there'
}
