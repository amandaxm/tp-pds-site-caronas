describe('Accepting peding ride request test', () => {
  const email = 'joao.pereira@gmail.com'
  const password = 'teste12345'

  it('Accept peding ride request', () => {
    cy.visit('http://localhost:8100')

    cy.viewport('iphone-6')

    cy.get('input[name="ion-input-0"]').type(email)

    cy.get('input[name="ion-input-1"]').type(password)

    cy.get('ion-button').click(
      { 
        multiple: true,
        force: true
      }
    )

    cy.get('ion-tab-button[tab="motorista"]').click()

    cy.contains('Solicitações pendentes').click()  

    cy.contains('Aceitar').click()
    
    cy.contains('Sim').click()

    cy.get('body').should(($div) => {
      const text = $div.text()
    
      expect(text).to.include('Confirmado')
    })
  })
})