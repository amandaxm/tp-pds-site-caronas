describe('Request a ride test', () => {
  const email = 'maria.antonieta@gmail.com'
  const password = 'teste12345'

  it('Request a ride', () => {
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

      cy.url().should('include', 'tabs/busca')

      cy.contains('Lucas Leandro').click()

      cy.get('ion-button').click(
        { 
          multiple: true,
          force: true
        }
      )

      cy.contains('Sim').click()

      cy.get('body').should(($div) => {
        const text = $div.text()
      
        expect(text).to.include('Aguardando confirmação')
      })
  })
})
