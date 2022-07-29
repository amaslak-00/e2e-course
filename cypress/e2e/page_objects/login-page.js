export class LoginPage {

    static openAutomationPracticeSignInPage(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }


    static inputAccount(loginemail, loginpassw) {

        cy.get('input#email').type(loginemail);
        cy.get('input#passwd').type(loginpassw);
    }

    static clickLogInButton(){
        cy.get('#SubmitLogin').click();
    }

    static checkIfMyAccountIsOpen(){
       cy.get('.page-heading').contains("My account");
    }

}