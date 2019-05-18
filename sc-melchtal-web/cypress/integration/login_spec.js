describe('Login Test', function() {
    it('Visit the Login Page', function () {
      cy.visit('http://localhost:4200')
        .contains('Willkommen beim Ski- und Wanderclub Melchtal')
        .get('a.nav-link').contains('Login').click()
        .get('form input[name="password"]').clear().type('2385')
        .get('button[type="submit"').click()
        .wait(3000)
        .get('a.nav-link').contains('Archiv').click()
        .get('h2').contains('Archiv')
        .get('a.nav-link').contains('Logout').click()
        .get('a.nav-link').contains('Login').click()
        .get('form input[name="password"]').clear().type('2385')
        .get('button[type="submit"').click()
        .wait(1000)
        .get('a.nav-link').contains('Home').click()
        .get('h2').contains('Willkommen beim Ski- und Wanderclub Melchtal')
        .get('a.nav-link').contains('Logout').click()
    }),
      it('should fail now', function () {
        cy.get('a.nav-link').contains('Login').click()
          .get('form input[name="password"]').clear().type('2385x')
          .get('button[type="submit"').click()
          .get('snack-bar-container').contains('Falscher Benutzername')
      });
})
