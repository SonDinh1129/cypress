describe("Ke Sach test khi dang nhap", () => {

  before(() => {
    cy.fixture('tempEmailAndAcc.json').then((data) => {
      const acc = data.acc;

      cy.visit('https://docln.sbs/login')
      cy.get('#name').type(acc)
      cy.get('#password').type('DinhSon112233@')
    
      cy.pause()
      cy.get('.btn-primary').click({force: true})
    })
  })

  it("Ke Sach test", () => {
    cy.visit('https://docln.sbs')

    cy.get(".nav-user_icon").click({ delay: 100 })
    cy.contains('Kệ sách').click({ delay: 100 })  
    cy.url().should('include', '/ke-sach')
  })

})
