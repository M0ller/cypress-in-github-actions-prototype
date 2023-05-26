describe('first test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });
  
  
  it('Use login', () => {
    const username = Cypress.env('auth_username')
    const password = Cypress.env('auth_password')
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.login-btn').click();
    
    cy.on('window:alert', (message) => {
      // Assert or perform actions based on the alert message
      expect(message).to.equal('Login Success');
    });
  })
})