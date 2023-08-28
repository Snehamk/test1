const mockBankWebsite = "https://demo.banked.com/new";
const { getTotalDelay } = require('../utils/helper');

describe('Creation of agreement and payment -> Success', () => {
  it('passes', () => {
    const bsb = "111-114";
    const accountNumber = "050511";
    const totalDelay = getTotalDelay(accountNumber);
    cy.visit(mockBankWebsite);
    cy.contains('New customer').click();
    cy.wait(500);
    cy.get('#region').select('AU').should('have.value', 'AU');
    cy.wait(500);
    cy.contains('Create Hosted Checkout').click();
    cy.wait(10000);
    cy.contains('Mock Bank').click();
    cy.wait(3000);
    cy.get('#BSB_NUMBER').type(bsb);
    cy.get('#ACCOUNT_NAME').type("Sneha Kulkarni");
    cy.get('#ACCOUNT_NUMBER').type(accountNumber);
    cy.wait(2000);
    cy.contains('Continue').click();
    cy.contains('Payment complete', { timeout: totalDelay + 20000 }).should('be.visible');    
  })
})

describe('Failure creating agreement message -> Success', () => {
  it('passes', () => {
    const bsb = "111-114";
    const accountNumber = "010112";
    const totalDelay = getTotalDelay(accountNumber);
    cy.visit(mockBankWebsite);
    cy.contains('New customer').click();
    cy.wait(500);
    cy.get('#region').select('AU').should('have.value', 'AU');
    cy.wait(500);
    cy.contains('Create Hosted Checkout').click();
    cy.wait(10000);
    cy.contains('Mock Bank').click();
    cy.wait(3000);
    cy.get('#BSB_NUMBER').type(bsb);
    cy.get('#ACCOUNT_NAME').type("Sneha Kulkarni");
    cy.get('#ACCOUNT_NUMBER').type(accountNumber);
    cy.wait(2000);
    cy.contains('Continue').click();
    cy.contains('Payment Failed', { timeout: totalDelay + 20000 }).should('be.visible');    
  })
})

describe('Failed Payment Insufficient Funds -> Success', () => {
  it('passes', () => {
    const bsb = "111-114";
    const accountNumber = "010124";
    const totalDelay = getTotalDelay(accountNumber);
    cy.visit(mockBankWebsite);
    cy.contains('New customer').click();
    cy.wait(500);
    cy.get('#region').select('AU').should('have.value', 'AU');
    cy.wait(500);
    cy.contains('Create Hosted Checkout').click();
    cy.wait(10000);
    cy.contains('Mock Bank').click();
    cy.wait(3000);
    cy.get('#BSB_NUMBER').type(bsb);
    cy.get('#ACCOUNT_NAME').type("Sneha Kulkarni");
    cy.get('#ACCOUNT_NUMBER').type(accountNumber);
    cy.wait(2000);
    cy.contains('Continue').click();
    cy.contains('Insufficient funds', { timeout: totalDelay + 20000 }).should('be.visible');    
  })
})

describe('Creation of agreement and payment -> Failure', () => {
  it('passes', () => {
    const bsb = "111-115";
    const accountNumber = "050511";
    const totalDelay = getTotalDelay(accountNumber);
    cy.visit(mockBankWebsite);
    cy.contains('New customer').click();
    cy.wait(500);
    cy.get('#region').select('AU').should('have.value', 'AU');
    cy.wait(500);
    cy.contains('Create Hosted Checkout').click();
    cy.wait(10000);
    cy.contains('Mock Bank').click();
    cy.wait(3000);
    cy.get('#BSB_NUMBER').type(bsb);
    cy.get('#ACCOUNT_NAME').type("Sneha Kulkarni");
    cy.get('#ACCOUNT_NUMBER').type(accountNumber);
    cy.wait(2000);
    cy.contains('Continue').click();
    cy.contains('Payment complete', { timeout: totalDelay + 20000 }).should('be.visible');    
  })
})
