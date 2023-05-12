import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { type Profile } from '@/features/EditProfileCard'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'

import ProfilePage from './ProfilePage'

const profileData: Profile = {
    username: 'username',
    avatar: 'https://ru-static.z-dn.net/files/dd3/7aad487ccd51f3dce75e4e64031f1291.png',
    country: Country.Armenia,
    city: 'Severodvinsk',
    firstname: 'Nikitosik',
    lastname: 'Abdurozik',
    age: 14,
    currency: Currency.USD
}

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        router: {
            path: '/profile/:id',
            route: '/profile/1'
        }
    },
    decorators: [
        StoreDecorator({
            profile: {
                data: profileData,
                form: profileData,
                readonly: true
            }
        })
    ]
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
