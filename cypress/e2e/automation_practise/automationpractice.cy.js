/// <reference types="cypress" />

import { LoginPage } from "../page_objects/login-page";
import {MainPage} from "../page_objects/main-page"
import { ShoppingCartPage } from "../page_objects/shopping-cart_page";
import {WomenPage} from "../page_objects/women-page"

context('e-shop go to', () => {

  beforeEach(() => {

      MainPage.openAutomationPracticePage();

  })

  describe('Logging in', () => {

    let data;
    before(() => {
      cy.fixture("login-data").then((logindata) => {
        data = logindata;
      })
    })

      // it('should Log in', () => {

      //     MainPage.clickSignButton();
      //     LoginPage.inputAccount(data.email, data.password);
      //     LoginPage.clickLogInButton();
      //     LoginPage.checkIfMyAccountIsOpen();

      // })

  })

  describe('Adding to cart', () => {

       

    it('should add element to cart', () => {

        WomenPage.openWomenCategory();
        WomenPage.checkIfWomenCategoryIsOpen();
        const price1 = WomenPage.addElementToCart(4);
        WomenPage.clickContinueShopping();
        const price2 = WomenPage.addElementToCart(3);
        WomenPage.clickProccedShopping();
        WomenPage.checkIfConfirmationIsOpen();
        ShoppingCartPage.searchFirstPrice(1, price1);
        ShoppingCartPage.searchFirstPrice(2, price2);
        const total = ShoppingCartPage.searchFirstPrice();
        

    })

})

})