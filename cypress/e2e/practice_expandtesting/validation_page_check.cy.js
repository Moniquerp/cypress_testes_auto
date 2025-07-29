describe('Validação do checkbox', () => {
   
    it('Validação do check', () => { 
        cy.visit('https://practice.expandtesting.com/checkboxes') //visitar site
        cy.get('.text-capitalize').should('have.text','Sample Checkboxes page for practice test automation') //Validar página "Sample Checkboxes .."
        cy.wait(1000)
        cy.get('#checkbox1').scrollIntoView({duration:1000}).check() //clicar no checkbox
        cy.wait(1000)
        cy.get('#checkbox1').should('be.checked')//Validar que realizou o check ("be checked")   
    })
    
    it('Validação do uncheck', () => { 
        cy.visit('https://practice.expandtesting.com/checkboxes') //visitar site
        cy.get('.text-capitalize').should('have.text','Sample Checkboxes page for practice test automation') //Validar página "Sample Checkboxes .."
        cy.wait(1000)
        cy.get('#checkbox2').scrollIntoView({duration:1000}).uncheck() //desmarcar o checkbox
        cy.wait(1000)
        cy.get('#checkbox2').should('not.to.be.checked')//validar que realizou o check ("be unchecked")
    })
})
