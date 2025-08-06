describe('Validar função screenshot', () => {
   
    it('Validar se realizou screenshot da pagina toda', () => { 
        cy.visit('https://practice.expandtesting.com/')
        cy.get('#home-header').screenshot('monique',{overwrite: true})
    })

    it('Wait from page', () => { 
        cy.visit('https://practice.expandtesting.com/')
        cy.get('.gap-3 [href="/xpath-css-tester"]').click()
        cy.wait(10000)
        cy.get('h1').should('have.text', 'Xpath and Css Selector Tester Free Tools - Automation Testing Practice')
    })
})
