describe('Validação do check', () => {
   
    it('Validar se realizou screenshot da pagina toda', () => { 
        cy.visit('https://practice.expandtesting.com/checkboxes') //visitar site
        cy.get('[page-title="text-capitalize h2 mb-4"]').should('have.text','Sample Checkboxes page for practice test automation') //Validar que foi para a página "Sample Checkboxes .."
        cy.get('#checkbox1').check('checkbox1')
        cy.get('#checkbox1').should('be.checked') //validar se tabela após consulta do nome, possui apenas 1 item
    })

})