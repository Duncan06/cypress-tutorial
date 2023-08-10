it('works with iframes', () => {
    cy.visit('/iframe_home');

    cy.get('iframe').its('0.contentDocument.body');
});