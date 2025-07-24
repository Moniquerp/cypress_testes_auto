describe('Teste relacionados a redes sociais', () => {
   
    it('Realizando compra com sucesso', () => { 
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('be.visible').contains('Swag Labs') // validar que foi pra pag "swag labs"
        cy.get('[data-test="username"]').type('visual_user') // Realizar login com usuário "visual_user"
        cy.get('[data-test="password"]').type('secret_sauce') // senha
        cy.get('[data-test="login-button"]').click({force:true}) // botao login
        cy.get('[data-test="title"]').should('be.visible').contains('Products') //Validar que foi para a página "Products"
        cy.get('footer').scrollIntoView({duration:1000}) // Utilizar a função .scrollIntoView() para ir até as redes sociais no rodapé da página
        cy.get('ul.social li').should('have.length', 3) // Validar que possui 3 redes sociais
        cy.get('ul.social li.social_twitter').should('have.text', 'Twitter') // Validar q contém nome "Twitter" exatamente igual
        cy.get('ul.social li.social_facebook').should('have.text', 'Facebook') // Validar q contém nome "Facebook" exatamente igual
        cy.get('ul.social li.social_linkedin').should('have.text', 'LinkedIn') // Validar q contém nome "Linkedin" exatamente igual
        cy.get('[data-test="social-twitter"]').should('have.attr','href','https://twitter.com/saucelabs') // Validar se twitter possui um link 
        cy.get('[data-test="social-facebook"]').should('have.attr','href','https://www.facebook.com/saucelabs') // Validar se facebook possui um link 
        cy.get('[data-test="social-linkedin"]').should('have.attr','href','https://www.linkedin.com/company/sauce-labs/') // Validar se linkedin possui um link 
    })
})
