import { Page } from "@playwright/test";

export class RegisterPage {
    constructor(private page: Page) {}

    //Locators
    mailField = this.page.getByPlaceholder('name@domain.com');
    passwordField = this.page.getByPlaceholder('At least 8 characters');
    repeatPasswordField = this.page.getByPlaceholder('Same password as above');
    checkboxConfirmTerms = this.page.getByRole('checkbox').nth(0);
    checkboxCommercialCorrespondence = this.page.getByRole('checkbox').nth(1);
    createAccountBtn = this.page.getByRole('button', {name: 'Create account'});

    async goToCreateAccountFromMenuOnMainPage() {
    await this.mailField.fill('');
    await this.passwordField.fill('');
    await this.repeatPasswordField.fill('');
    await this.checkboxConfirmTerms.click();
    await this.createAccountBtn.click();
    }
}