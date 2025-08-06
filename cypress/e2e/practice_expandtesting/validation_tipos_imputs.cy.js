describe('Validação dos tipos de inputs', () => {
   
    it('Validar inputs', () => { 
        cy.visit('https://practice.expandtesting.com/inputs') //visitar site
        cy.get('h1').should('be.visible').and('have.text','Web inputs page for Automation Testing Practice') //Validar que foi para a página "Web inputs.."
        cy.get('input#input-number').type('5')//preencher todos os elementos
        cy.get('input#input-text').type('exemple')//preencher todos os elementos
        cy.get('input#input-password').type('12345')//preencher todos os elementos
        cy.get('input#input-date').type('1995-12-12')//preencher todos os elementos
        //validar os tipos de inputs existentes na página
    })
})
