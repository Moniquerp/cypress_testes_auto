describe('Validação do select', () => {
   
    it.only('Validar se realizou screenshot da pagina toda', () => { 
        cy.visit('https://practice.expandtesting.com/dynamic-pagination-table') //visitar site
        cy.get('h1').should('be.visible').and('have.text','Dynamic pagination Table page for Automation Testing Practice') //Validar que foi para a página "Dynamic pagination Table.."
        cy.get('select').select('10').should('have.value', '10') //utilizar o comando select() no elemento e selecionar a opcao 10
        cy.get('td.sorting_1').should('be.visible').and('have.length', 10)//validar que existem 10 itens na tabela
        
        cy.get('.sorting_asc').should('have.text','Student Name')
        //cy.get('.sorting').should('have.text','Student Name')
        //cy.get('[aria-label="Student Name: activate to sort column ascending"]').should('have.text','Student Name')
        cy.get('[aria-label="Gender: activate to sort column ascending"]').should('have.text','Gender')
        cy.get('[aria-label="Class Level: activate to sort column ascending"]').should('have.text','Class Level')
        cy.get('[aria-label="Home State: activate to sort column ascending"]').should('have.text','Home State')
        cy.get('[aria-label="Major: activate to sort column ascending"]').should('have.text','Major')
        cy.get('[aria-label="Extracurricular Activity: activate to sort column ascending"]').should('have.text','Extracurricular Activity')
        //cy.get('[aria-label="Extracurricular Activity: activate to sort column descending"]').should('have.text','Extracurricular Activity')
        
        cy.get('.form-control').type('Alice Johnson')
        //validar se a tabela após consulta do nome, possui apenas 1 item
    })

    it('Wait from page', () => { 
        cy.visit('https://practice.expandtesting.com/')
        cy.get('.gap-3 [href="/xpath-css-tester"]').click()
        cy.wait(10000)
        cy.get('h1').should('have.text', 'Xpath and Css Selector Tester Free Tools - Automation Testing Practice')
    })
})