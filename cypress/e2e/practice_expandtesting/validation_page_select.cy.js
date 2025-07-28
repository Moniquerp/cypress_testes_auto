describe('Validação do select', () => {
   
    it('Validar se realizou screenshot da pagina toda', () => { 
        cy.visit('https://practice.expandtesting.com/dynamic-pagination-table') //visitar site
        cy.get('h1').should('be.visible').and('have.text','Dynamic pagination Table page for Automation Testing Practice') //Validar que foi para a página "Dynamic pagination Table.."
        cy.get('label .form-select').select('10').should('have.value', '10') //utilizar o comando select() no elemento e selecionar a opcao 10
        cy.get('#demo tr').should('be.visible').and('have.length', 10)//validar que existem 10 itens na tabela
        cy.get('.sorting_asc').should('have.text','Student Name')
        cy.get('[aria-label="Gender: activate to sort column ascending"]').should('be.visible').and('have.text','Gender')
        cy.get('[aria-label="Class Level: activate to sort column ascending"]').should('be.visible').and('have.text','Class Level')
        cy.get('[aria-label="Home State: activate to sort column ascending"]').should('be.visible').and('have.text','Home State')
        cy.get('[aria-label="Major: activate to sort column ascending"]').should('be.visible').and('have.text','Major')
        cy.get('[aria-label="Extracurricular Activity: activate to sort column ascending"]').should('be.visible').and('have.text','Extracurricular Activity')
        cy.get('.form-control-sm').type('Alice Johnson') //validar se tabela após consulta do nome, possui apenas 1 item
        cy.get('#demo tr').should('be.visible').and('have.length', 1)
    })
})