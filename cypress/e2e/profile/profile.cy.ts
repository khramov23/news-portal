import { User } from '@/entities/User'

let profileId = ''

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.login().then((body: User) => {
            profileId = body.id
            cy.visit(`/profile/${body.id}`)
        })
    })

    afterEach(() => {
        cy.resetProfile(profileId)
    })

    it('Карточка пользователя загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'testing')
    })

    it('Пользователь редактирует свой профиль', () => {
        const firstname = 'changedFirstname'
        const lastname = 'changedLastname'

        cy.updateProfile({ firstname, lastname })
        cy.getByTestId('ProfileCard.firstname').should('have.value', firstname)
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastname)
    })
})

export {}
