describe('Acceprt EULA', function() {
    it('just login!', function() {
        cy.visit('https://'+Cypress.env("FUSION_IP")+':'+Cypress.env("FUSION_PORT"));
        cy.get('.button-primary').click()
        cy.get('#username').type("admin")
        cy.get('#password').type("nexenta")
        cy.get ('.button-login').click()
        cy.get('#old-pass').type('nexenta')
        cy.get('#new-pass').type('Nexenta1!')
        cy.get('#new-pass-repeat').type('Nexenta1!')
        cy.get('.button-primary').click()





    })
});