describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/UserRegistrationForm')
      cy.title().should('eq','Movie App')
      cy.get('[id="loginId"]').should('exist')
      cy.get('[id="firstName"]').should('exist')
      cy.get('[id="lastName"]').should('exist')
      cy.get('[id="email"]').should('exist')
    })
    it('passes', () => {
      cy.visit('http://localhost:3000/UserRegistrationForm')
      cy.title().should('eq','Movie App')
      cy.get('[id="loginId"]').type('Selvaraaj')
      cy.get('[id="firstName"]').type('Selvaraaj')
      cy.get('[id="lastName"]').type('raaj')
      cy.get('[id="email"]').type('Selvaraaj@gmail.com')
    })
  })