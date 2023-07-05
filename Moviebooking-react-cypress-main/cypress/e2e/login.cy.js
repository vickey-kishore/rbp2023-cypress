describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('eq','Movie App')
    cy.contains('Login').click();
    cy.get('[id="loginId"]').should('exist')
    cy.get('[id="password"]').should('exist')
  })
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('eq','Movie App')
    cy.contains('Login').click();
    cy.get('[id="loginId"]').type('Selvaraaj')
    cy.get('[id="password"]').type('selva123')
    cy.get('[type="submit"]').click();
    
  })
})