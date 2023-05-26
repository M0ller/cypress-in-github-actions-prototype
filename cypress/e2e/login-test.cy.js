describe('first test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });
  
  
  it('Use login', () => {
    cy.get('#username').type('testuser');
    cy.get('.login-btn').click();
    
    cy.on('window:alert', (message) => {
      // Assert or perform actions based on the alert message
      expect(message).to.equal('Login Success');
    });
  })
})