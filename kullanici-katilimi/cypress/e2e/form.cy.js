
describe('Form Test', () => {
    it('Test', () => {
        cy.visit('/')
        cy.get('input[name="name"]').type('Elif')
        cy.get('input[name="name"]').first().should('have.value','Elif')
        cy.get('input[name="lastname"]').type('Emir')
        cy.get('input[name="email"]').type('elifozlemkaya@gmail.com')
        cy.get('input[name="password"]').type('12345678')
        cy.get('input[name="terms"]').check()
        cy.get('button[type="submit"]').should('be.enabled')
        cy.get('input[name="name"]').clear()
        cy.get('button[type="submit"]').should('be.disabled')
        cy.get('input[name="name"]').type('Elif')
        cy.get('button[type="submit"]').should('be.enabled')
        
    });
});