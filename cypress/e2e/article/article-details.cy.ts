let articleId = ''

describe('Пользователь заходит на страницу конкретной статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            articleId = article.id
            cy.visit('/articles/' + article.id)
        })
    })

    afterEach(() => {
        cy.removeArticle(articleId)
    })

    it('Статья отрисовывается', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
    })

    it('Пользователь видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendations').should('exist')
    })

    it('Пользователь может оставлять комментарии', () => {
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('new comment')
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
})
