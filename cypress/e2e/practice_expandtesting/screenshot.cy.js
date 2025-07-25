describe('Validar função screenshot', () => {
   
    it('Validar se realizou screenshot da pagina toda', () => { 
        cy.visit('https://practice.expandtesting.com/')
        cy.get('#home-header').screenshot('monique',{overwrite: true})
    })
})