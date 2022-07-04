describe('Sign up test', () => {
  const name = 'Maria da Silva'
  const email = 'maria.silva@gmail.com'
  const password = 'teste12345'


  it('Signing up', () => {
    cy.visit('http://localhost:8100')
    
    cy.viewport('iphone-6')

    cy.contains('Cadastre-se').click()

    cy.url().should('include', 'cadastro')

    cy.get('input[name="ion-input-2"]').type(name)
    
    cy.get('input[name="ion-input-3"]').type(email)
    
    cy.get('input[name="ion-input-4"]').type(password)
    
    cy.get('input[name="ion-input-5"]').type(password)

    cy.get('ion-checkbox[formcontrolname="ePassageiro"]').click()

    cy.get('ion-checkbox[formcontrolname="eMotorista"]').click()

    cy.get('ion-button').click(
      { 
        multiple: true,
        force: true
      }
    )
  })

  it('Confirm sign up', () => {
    cy.viewport('iphone-6')

    cy.get('ion-tab-button[tab="perfil"]').click()
  
    cy.url().should('include', 'tabs/perfil')
  
    cy.get('input[name="ion-input-6"]').should('have.value', name)
    
    cy.get('input[name="ion-input-7"]').should('have.value', email)
  })
})