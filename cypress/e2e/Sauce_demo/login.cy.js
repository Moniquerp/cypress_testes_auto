describe('Suite de testes relacionada a sauce demo', () => {
   
    it('login com sucesso', () => { 
         cy.visit('https://www.saucedemo.com/')
         cy.get('[data-test="username"]').type('problem_user')
         cy.get('[data-test="password"]').type('secret_sauce')
         cy.get('[data-test="login-button"]').click()

         cy.get('[data-test="title"]').contains('Products') //Validar subtitulo da pag é igual a "Products
         cy.get('<img.bm-icon>').should('have.length', 0) // validar quantos cachorros tem
         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() // clicar bo botao add to cart
         cy.get('[data-test="shopping-cart-link"]').click() // entre no carrinho
         cy.contains('Sauce Labs Backpack') // validar se foi add no carrinho
     })

    })    



        
    