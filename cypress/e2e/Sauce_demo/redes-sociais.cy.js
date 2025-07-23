describe('Teste relacionados a redes sociais', () => {
   
    it('Realizando compra com sucesso', () => { 
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('be.visible').contains('Swag Labs') // validar que foi pra pag "swag labs"
        cy.get('[data-test="username"]').type('standard_user') // Realizar login com usuário "visual_user"
        cy.get('[data-test="password"]').type('secret_sauce') // senha
        cy.get('[data-test="login-button"]').click() // botao login
        cy.get('[data-test="title"]').should('be.visible').contains('Products') //Validar que foi para a página "Products"
                                            // Utilizar a função .scrollIntoView() para ir até as redes sociais no rodapé da página
                                            //Validar que possui 3 redes sociais
                                            //Validar que contém os nomes "Twitter", "Facebook" e "Linkedin" exatamente como no elemento com o should('have.text', 'texto')
                                            //Validar se cada rede social possui um link (elemento href)

    })


})
