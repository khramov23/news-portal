import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import Avatar from 'shared/assets/tests/avatar.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        age: 21,
        currency: Currency.RUB,
        lastname: 'Khramov',
        firstname: 'Egor',
        username: 'admin',
        city: 'Nizhniy Novgorod',
        country: Country.Russia,
        avatar: Avatar
    }
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}

export const Error = Template.bind({})
Error.args = {
    error: 'error'
}
