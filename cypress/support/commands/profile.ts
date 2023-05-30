import { Profile } from '@/entities/Profile'

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile: (profile?: Partial<Profile>) => void
            resetProfile: (profileId: string) => void
        }
    }
}

export const updateProfile = (profile: Required<Partial<Profile>>) => {
    const {
        firstname = 'changedFirstName',
        lastname = 'changedLastname'
    } = profile

    cy.getByTestId('EditProfileCardHeader.EditButton').click()
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
    cy.getByTestId('EditProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:5000/profile/${profileId}`,
        headers: {
            Authorization: 'Something'
        },
        body: {
            id: '3',
            firstname: 'firstname',
            lastname: 'lastname',
            age: 21,
            currency: 'USD',
            country: 'Belarus',
            city: 'Минск',
            username: 'testuser',
            avatar: 'https://sun9-17.userapi.com/impg/88g88JCZ_V_KoGfqpJ_Em5_V8mdEzf09II3waA/_1orgxg5Zfk.jpg?size=548x604&quality=96&sign=e5e8aaf92b430e5ca056c6343240fc2b&type=album'
        }
    })
}
