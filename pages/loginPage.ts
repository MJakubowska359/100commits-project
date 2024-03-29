import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) { }

    // locators
    signUpBtn = this.page.getByRole('button', { name: "Don't have an account? Sign up" });
    signInUsingEmailBtn = this.page.getByRole('button', { name: 'Sign in using address email' });

    signInBtn = this.page.getByRole('button', { name: 'Sign in' });
    forgetPasswordBtn = this.page.getByRole('button', { name: 'Forgot your password?' });
    resetPasswordBtn = this.page.getByRole('button', { name: 'Reset password' });

    async goToCreateAccountFromSignInPage() {
        await this.signUpBtn.click();
    }

    async goToSignInPageByEmail() {
        await this.signInUsingEmailBtn.click();
    }

    async clickSignInButton() {
        await this.signInBtn.click();
    }

    async clickForgotPasswordButton() {
        await this.forgetPasswordBtn.click();
    }

    async clickResetPasswordButton() {
        await this.resetPasswordBtn.click();
    }
}