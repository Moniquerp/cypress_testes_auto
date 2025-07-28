describe('Validação do check', () => {
   
    it('Validar se realizou screenshot da pagina toda', () => { 
        cy.visit('https://practice.expandtesting.com/dynamic-pagination-table') //visitar site
        cy.get('h1').should('be.visible').and('have.text','Dynamic pagination Table page for Automation Testing Practice') //Validar que foi para a página "Dynamic pagination Table.."
        cy.get('select').select('10').should('have.value', '10') //utilizar o comando select() no elemento e selecionar a opcao 10
        cy.get('td.sorting_1').should('be.visible').and('have.length', 10)//validar que existem 10 itens na tabela
        
        cy.get('.sorting_asc').should('have.text','Student Name')
        cy.get('[aria-label="Gender: activate to sort column ascending"]').should('have.text','Gender')
        cy.get('.form-control').type('Alice Johnson') //validar se tabela após consulta do nome, possui apenas 1 item
    })

})