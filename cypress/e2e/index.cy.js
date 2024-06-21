/// <reference types="cypress" />

context('testing caesar component', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });

    it('displays Khoor from Hello with key 3', () => {
        cy.get('input[type="number"]').type('3');
        cy.get('textarea').type('Hello');
        cy.get('button[type="button"]').click()
        // cy.wait(1000)
        cy.dataCy('result').contains('Khoor')
    });
})
