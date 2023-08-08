it('performs assertions', () => {
    // cy.visit('/').get('.test').invoke('data', 'foo').should('equal', 'bar');

    expect(['one', 'two', 'three']).to.include('three');
});