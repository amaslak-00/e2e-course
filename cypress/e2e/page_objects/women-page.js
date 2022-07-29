export class WomenPage {

    static openWomenCategory(){
        cy.get('#block_top_menu').contains("Women").click();
    }

    static checkIfWomenCategoryIsOpen(){
      cy.get('#center_column > h1').contains('Women');
    }

    static addElementToCart(number){

        let price = Cypress.$(`.product_list > :nth-child(${number}) .price`);
        cy.get(".product_list > :nth-child("+number+")").contains('Add to cart').click();
        console.log(price[0].innerHTML.trim());
        return price[0].innerHTML.trim();

    }

    static clickContinueShopping(){
        cy.get('.continue').contains("Continue").click();
        cy.wait(6000);
    }

    static clickProccedShopping(){
        cy.get('.button-medium').contains("Proceed").click();
        cy.wait(6000);
    }

    static checkIfConfirmationIsOpen(){
        cy.get('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2').contains('Product successfully added to your shopping cart');
    }


}