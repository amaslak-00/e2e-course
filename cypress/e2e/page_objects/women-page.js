export class WomenPage {

    static openWomenCategory(){
        cy.get('#block_top_menu').contains("Women").click();
    }

    static checkIfWomenCategoryIsOpen(){
      cy.get('#center_column > h1').contains('Women');
    }

    static addElementToCart(number){
        cy.get(".product_list > :nth-child("+number+")").contains('Add to cart').click();
    }

    static getPrice(number){
        let price = Cypress.$(`.product_list > :nth-child(${number}) .price`);
        cy.log(price[0].innerHTML.trim());
        return price[0].innerHTML.trim();
    } 

    static clickContinueShopping(){
        cy.wait(6000);
        cy.get('.continue').contains("Continue").click();
       
    }

    static clickProceedShopping(){
        cy.wait(6000);
        cy.get('.button-medium').contains("Proceed").click();
   
    }

    static checkIfConfirmationIsOpen(){
        let sampleText = 'Product successfully added to your shopping cart';
        cy.get('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2').contains(sampleText);
    }


}