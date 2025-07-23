describe('Teste relacionados a redes sociais', () => {
   
    it('Realizando compra com sucesso', () => { 
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('be.visible').contains('Swag Labs') // validar que foi pra pag "swag labs"
        cy.get('[data-test="username"]').type('visual_user') // Realizar login com usuário "visual_user"
        cy.get('[data-test="password"]').type('secret_sauce') // senha
        cy.get('[data-test="login-button"]').click() // botao login
        cy.get('[data-test="title"]').should('be.visible').contains('Products') //Validar que foi para a página "Products"
        cy.get('footer').scrollIntoView()// Utilizar a função .scrollIntoView() para ir até as redes sociais no rodapé da página
        cy.get('ul.social').should('have.length', 1)// Validar que possui 3 redes sociais
        cy.get('ul.social').should('have.text', 'TwitterFacebookLinkedIn')// Validar q contém nomes "Twitter" "Facebook"  "Linkedin" exatamente igual
       
        cy.get('[href="https://twitter.com/saucelabs"]') // Validar se cada rede social possui um link  

        cy.get('[data-test="social-twitter"]').should('have.href','"https://twitter.com/saucelabs"')// Validar se twitter possui um link 
        cy.get('[data-test="social-facebook"]').should('have.href','"https://www.facebook.com/saucelabs"')// Validar se facebook possui um link 
        cy.get('[data-test="social-linkedin"]').should('have.href','"https://www.linkedin.com/company/sauce-labs/"')// Validar se linkedin possui um link 


    })


})
