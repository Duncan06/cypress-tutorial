it('works', () => {
    cy.visit('/').contains('Environment: acceptance');
})