it('stubs a network request', () => {
    cy.fixture('posts').then((json) => {
        cy.intercept('/posts', json).as('getPosts');
    })

    cy.intercept('/posts').as('getPosts');

    cy.visit('/blog').get('body').contains('My First Post');

    // cy.wait('@getPosts').then(data => {
    //     cy.writeFile('tests/cypress/fixture/posts.json', data.response.body);
    // });
});