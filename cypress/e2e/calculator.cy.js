describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it("should add 1 to 4",()=>{
  cy.get("#number1").click();
  cy.get("#operator_add").click();
  cy.get("#number4").click();
  cy.get("#operator-equals").click();
  cy.get('.display').should('contain','5')
  
  })
  it("should subtract 4 from 7 and get 3",()=>{
    cy.get("#number7").click();
  cy.get("#operator-subtract").click();
  cy.get("#number4").click();
  cy.get("#operator-equals").click();
  cy.get('.display').should('contain','3')
  });

  it('should multiply 3 by 5 and get 15',()=>{
    cy.get("#number3").click();
  cy.get("#operator-multiply").click();
  cy.get("#number5").click();
  cy.get("#operator-equals").click();
  cy.get('.display').should('contain','15')
  });

  it("should divide 21 by 7 and get 3",()=>{
    cy.get("#number2").click();
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number7").click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain','3')
  
  });
  it("Should concatenate multiple number button clicks",()=>{
    cy.get("#number1").click();
    cy.get("#number1").click();
    cy.get("#number1").click();
    cy.get('.display').should('contain','111')
  });
  it("should chain multiple operations together",()=>{
  
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get('.display').should('contain','4')
    cy.get("#operator-multiply").click();
    cy.get('.display').should('contain','8')
  });
  it("should clear the running total without affecting the calculation",()=>{
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number6").click();
    cy.get("#operator-multiply").click();
    cy.get("#clear").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain','24')
  })

})


// Do the number buttons update the display of the running total?
// Do the arithmetical operations update the display with the result of the operation?
// Can multiple operations be chained together?
// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).







