export class ShoppingCartPage {

    static searchFirstPrice(i, price){
      cy.get(`tbody > :nth-child(${i}) .cart_unit > .price .price`).invoke('text').should('eq', price);
    }

    static searchTotalPrice(price){
        let total = cy.get('#total_product').invoke('text').should('eq', price);
    }

}