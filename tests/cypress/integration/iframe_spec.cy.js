it('works with iframes', () => {
    cy.visit('/iframe_home');

    cy.getIframe()
        .find('#iframe-button')
        .should('have.text', 'Click Me');
});