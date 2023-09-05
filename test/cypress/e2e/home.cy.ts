context('Routing page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should go to eg', () => {
    cy.get('#route')
    .then(($myclick) => {
      console.log("hello world", $myclick)
    })
  })

  it('should contains Next.js!', () => {
    cy.get(".main").contains("Next.js!")
  })

  it('should not contain Rust', () => {
    cy.get('h1').should('not.contain', 'Rust')
  })

  // it("set timeout", () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('#missing', {timeout: 10000})
  // })

  it('proper routing', () => {
    cy.get('#route').click();

    cy.url().should('eq', 'http://localhost:3000/eg')
  })

  it('proper routing', () => {
    cy.get('#fun').click();

    cy.url().should('eq', 'http://localhost:3000/fun')
  })

})