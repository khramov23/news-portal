import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

import { EditProfileCard } from './EditProfileCard'
import { type Profile } from '../model/types/profileSchema'
import { ValidateError } from '../model/types/profileSchema'

export default {
    title: 'features/EditProfileCard',
    component: EditProfileCard
} as ComponentMeta<typeof EditProfileCard>

const Template: ComponentStory<typeof EditProfileCard> = (args) => <EditProfileCard {...args} />

const data: Profile = {
    age: 21,
    currency: Currency.RUB,
    lastname: 'Khramov',
    firstname: 'Egor',
    username: 'admin',
    city: 'Nizhniy Novgorod',
    country: Country.Russia,
    avatar: 'https://klike.net/uploads/posts/2018-12/1544425270_1.jpg'
}

export const Primary = Template.bind({})
Primary.decorators = [StoreDecorator({
    profile: {
        data,
        form: { ...data },
        readonly: true
    }
})]

export const Loading = Template.bind({})
Loading.decorators = [StoreDecorator({
    profile: {
        isLoading: true
    }
})]

export const Error = Template.bind({})
Error.decorators = [StoreDecorator({
    profile: {
        data,
        form: { ...data },
        readonly: true,
        error: 'something'
    }
})]

export const ValidationErrors = Template.bind({})
ValidationErrors.decorators = [StoreDecorator({
    profile: {
        data,
        form: { ...data },
        readonly: true,
        validateErrors: [ValidateError.SERVER_ERROR, ValidateError.INCORRECT_CITY]
    }
})]
