import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CountrySelect } from './CountrySelect'
import { Country } from '../../model/types/country'

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    args: {
        value: Country.Russia
    }
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Readonly = Template.bind({})
Readonly.args = {
    readonly: true
}
