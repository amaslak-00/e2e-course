export class LoginPage {

    static openAutomationPracticeSignInPage(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }


    static setUserAndPassword(loginemail, loginpassw) {

        cy.get('input#email').type(loginemail);
        cy.get('input#passwd').type(loginpassw);
    }

    static clickLogInButton(){
        cy.get('#SubmitLogin').click();
    }

    static checkIfMyAccountIsOpen(loginname){
       cy.get('.page-heading').contains("My account");
       cy.get('.account > span'). contains(loginname);
    }

}