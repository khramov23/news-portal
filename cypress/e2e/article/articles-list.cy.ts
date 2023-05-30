describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('/articles')
        })
    })

    it('Статьи успешно выводятся', () => {
        cy.getByTestId('ArticleList').should('exist')
    })
})
