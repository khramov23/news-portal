import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

import { Profile } from '../types/profile'

export const profileMock: Profile = {
    username: 'username',
    avatar: 'https://ru-static.z-dn.net/files/dd3/7aad487ccd51f3dce75e4e64031f1291.png',
    country: Country.Armenia,
    city: 'Severodvinsk',
    firstname: 'Nikitosik',
    lastname: 'Abdurozik',
    age: 14,
    currency: Currency.USD
}
