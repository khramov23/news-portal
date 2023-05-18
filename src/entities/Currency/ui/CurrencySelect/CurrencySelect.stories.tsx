import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CurrencySelect } from './CurrencySelect'
import { Currency } from '../../model/types/currency'

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    args: {
        value: Currency.RUB
    }
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Readonly = Template.bind({})
Readonly.args = {
    readonly: true
}
