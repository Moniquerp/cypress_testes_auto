describe('Testes relacionados a compras', () => {

    it('Realizando compra com sucesso', () => { 
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('be.visible').contains('Swag Labs') // validar que foi pra pag "swag labs"
        cy.get('[data-test="username"]').type('standard_user') // Realizar login com usuário "standart"
        cy.get('[data-test="password"]').type('secret_sauce') // senha
        cy.get('[data-test="login-button"]').click() // botao login
        cy.get('[data-test="title"]').should('be.visible').contains('Products') //Validar que foi para a página "Products"
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() //Adicionar 4 itens
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click() //Adicionar 4 itens
        cy.get('[data-test="shopping-cart-link"]').click() //Ir para carrinho
        cy.get('[data-test="title"]').should('be.visible').contains('Your Cart') //Validar que foi para a página "Your Cart"
        cy.get('.cart_item').should('be.visible').and('have.length', 4) //entrar no carrinho, validar itens que foram add
        cy.get('[data-test="checkout"]').click() // ira para checkout
        cy.get('[data-test="title"]').should('be.visible').contains('Checkout: Your Information') //Validar que foi para a página "Checkout Your Information"

                                        //Preencher campos de checkout

                                        //Ir para overview

                                        //Validar que foi para a página "Checkout: Overview"

                                        //Ir para finish

                                        //Validar que foi para a página "Checkout: Complete!"

                                        //Validar mensagem de sucesso "Thank you for your order!"

})
})