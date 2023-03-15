import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Выберите что-нибудь',
    options: ['рыбов', 'макароны', '0.25 компотика']
}
