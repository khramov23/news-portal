import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

import { ProfileCard } from './ProfileCard'

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
        avatar: 'https://klike.net/uploads/posts/2018-12/1544425270_1.jpg'
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
