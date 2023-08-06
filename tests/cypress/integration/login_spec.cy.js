describe('Login', () => {
    before(() => {
        cy.refreshDatabase().seed();

        cy.create('App\\Models\\User', {
            name: 'JohnDoe',
            email: 'john@example.com',
            password: 'example'
        });
    });

    beforeEach(() => {
        cy.visit('/').contains('a', 'Sign In').click();
    });

    context('with valid credentials', () => {

        it('works', () => {
            cy.get('#email').type('john@example.com');
            cy.get('#password').type('example');
            cy.contains('button', 'Log In').click();

            cy.contains('You are now logged in.')

            cy.visit('/settings/account').contains('Update Your Account');
        });
    })

    context('with invalid credentials', () => {

        it('requires a valid email address', () => {
            cy.get('#email').type('foobar');
            cy.get('#password').focus();

            cy.contains('The email must be a valid email address.')
        });

        it('requires an existing email address', () => {
            cy.get('#email').type('foobar@example.com');
            cy.get('#password').focus();

            cy.contains('The provided email does not exist.')
        });

        it('requires valid credentials', () => {
            cy.get('#email').type('john@example.com');
            cy.get('#password').type('invalidpassword');
            cy.contains('button', 'Log In').click();

            cy.contains("We couldn't verify your credentials.")
        });
    });
});