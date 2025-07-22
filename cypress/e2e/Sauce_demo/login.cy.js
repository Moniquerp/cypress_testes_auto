describe('Suite de testes relacionada a sauce demo', () => {
   
    it('login com sucesso', () => { 
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })


    it('Validar a pagina de cachorros', () => { 
       
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="title"]').contains('Products') //Validar subtitulo da pag é igual a "Products
        cy.get('img.inventory_item_img').should('have.length', 6) // validar quantos cachorros tem

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() // clicar bo botao add to cart
        //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()

        cy.get('[data-test="shopping-cart-link"]').click() // entre no carrinho
        cy.get('[data-test="item-4-title-link"]').should('be.visible').and('have.length', 1)// validar se foi add no carrinho
         //cy.get('.cart_item').should('be.visible').and('have.length', 1)
         //cy.get('.cart_item').should('have.length', 1) 
    })


})
