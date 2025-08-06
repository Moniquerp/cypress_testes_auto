describe('Validação dos radio buttons', () => {
   
    it('Validar se clicou na opçã0o yellow', () => { 
        cy.visit('https://practice.expandtesting.com/radio-buttons') //visitar site
        cy.get('h1').should('be.visible').and('have.text','Radio Buttons page for Automation Testing Practice') //Validar que foi para a página "Radio Buttons page.."
        cy.get('#yellow').scrollIntoView({duration:1000}).check() //utilizar o comando e selecionar opção yellow
        cy.get('input[name="color"]').should('have.length', 5)//validar que existem 5 itens na lista dos radio buttons referente a cor favorita
        cy.get('#yellow').should('be.checked') //validar se está selecionado o botão yellow
    })
})