describe('Blog', () => {
    beforeEach(() => {
        cy.refreshDatabase();
    });

    it('shows all posts', () => {
        cy.create('App\\Models\\Post', {
            title: 'My First Post'
        });

        cy.visit('/blog').contains('My First Post');
    });

    it('creates a post', () => {

    });

})