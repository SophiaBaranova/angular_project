describe('E2E Auth flow: successful Signup, Login, Logout', () => {

  beforeEach(() => {
    // App starts at Layout, login form shown by default
    cy.visit('/');
  });

  it('should show login form for unauthenticated user', () => {
    cy.contains('Login').should('be.visible');
    cy.get('#inputUsername').should('exist');
    cy.get('#inputPassword').should('exist');
  });

  it('should allow user to sign up and access protected route', () => {
    cy.contains('Sign Up').click();

    cy.get('#inputUsername').type('testuser');
    cy.get('#inputPassword').type('password123');

    cy.get('button[type="submit"]').click();

    // Redirected to protected route
    cy.url().should('include', '/TechnologyItems');

    // Logout button visible (means authenticated)
    cy.contains('Log Out').should('be.visible');
  });

  it('should allow authenticated user to log out', () => {
    // Login
    cy.get('#inputUsername').type('testuser');
    cy.get('#inputPassword').type('password123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/TechnologyItems');

    // Logout
    cy.contains('Log Out').click();

    // Redirected back to login screen
    cy.contains('Login').should('be.visible');
    cy.get('#inputUsername').should('exist');
  });

  it('should prevent access to protected routes when not authenticated', () => {
    cy.visit('/TechnologyItems');

    // Guard + layout should show login instead
    cy.contains('Login').should('be.visible');
    cy.url().should('not.include', '/TechnologyItems');
  });

});

describe('E2E Auth flow: Login with invalid input', () => {

  beforeEach(() => {
    // App starts at Layout, login form shown by default
    cy.visit('/');
  });

  it('should show validation errors for empty fields', () => {
    cy.get('#inputUsername').focus().blur();
    cy.get('#inputPassword').focus().blur();

    cy.contains('Username is required.').should('be.visible');
    cy.contains('Password is required.').should('be.visible');

    cy.get('#inputUsername').should('have.class', 'is-invalid');
    cy.get('#inputPassword').should('have.class', 'is-invalid');

    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('should show validation error for short password', () => {
    cy.get('#inputUsername').type('user').blur();
    cy.get('#inputPassword').type('12345').blur();

    cy.get('button[type="submit"]').should('be.disabled');

    cy.contains('Password must be at least 8 characters.').should('be.visible');
    cy.get('#inputPassword').should('have.class', 'is-invalid');
  });

  it('should show validation error for password without letters', () => {
    cy.get('#inputUsername').type('user').blur();
    cy.get('#inputPassword').type('12345678').blur();

    cy.get('button[type="submit"]').should('be.disabled');

    cy.contains('Password must contain letters and numbers.').should('be.visible');
    cy.get('#inputPassword').should('have.class', 'is-invalid');
  });

  it('should show validation error for password without numbers', () => {
    cy.get('#inputUsername').type('user').blur();
    cy.get('#inputPassword').type('abcdefgh').blur();

    cy.get('button[type="submit"]').should('be.disabled');

    cy.contains('Password must contain letters and numbers.').should('be.visible');
    cy.get('#inputPassword').should('have.class', 'is-invalid');
  });

});
