export class ShoppingCartPage {

    static openAutomationPracticeSignInPage(){
        cy.visit("http://automationpractice.com/index.php?controller=order");
    }

    static searchFirstPrice(i, price){
      cy.get(`tbody > :nth-child(${i}) .cart_unit > .price .price`).invoke('text').should('eq', price);
    }

    static searchTotalPrice(price){
        let total = cy.get('#total_product').invoke('text').should('eq', price);
    }

}