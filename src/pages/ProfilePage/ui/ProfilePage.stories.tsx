import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { Profile } from '@/entities/Profile'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

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

export const Primary = Template.bind({})
