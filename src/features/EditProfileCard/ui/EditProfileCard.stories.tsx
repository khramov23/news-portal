import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { EditProfileCard } from './EditProfileCard'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import Avatar from 'shared/assets/tests/avatar.jpg'
import { type Profile } from 'features/EditProfileCard'
import { ValidateError } from 'features/EditProfileCard/model/types/profileSchema'

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
    avatar: Avatar
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
