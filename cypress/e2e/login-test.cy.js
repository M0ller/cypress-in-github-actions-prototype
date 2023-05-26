describe('first test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });
  
  
  it('Use login', () => {
    const username = Cypress.env('AUTH_USERNAME')
    cy.get('#username').type(username);
    cy.get('.login-btn').click();
    
    cy.on('window:alert', (message) => {
      // Assert or perform actions based on the alert message
      expect(message).to.equal('Login Success');
    });
  })
})