import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) { }

    // locators
    signUpBtn = this.page.getByRole('button', { name: "Don't have an account? Sign up" });
    signInUsingEmailBtn = this.page.getByRole('button', { name: 'Sign in using address email' });
    mailField = this.page.getByPlaceholder('name@domain.com');
    passwordField = this.page.getByPlaceholder('At least 8 characters');
    signInBtn = this.page.getByRole('button', { name: 'Sign in' });
    forgetPasswordBtn = this.page.getByRole('button', { name: 'Forgot your password?' });
    resetPasswordBtn = this.page.getByRole('button', { name: 'Reset password' });

    // assertion ready to use in tests
    // await expect(page.getByRole('heading', {name: 'Employer panel'}));
    // await expect(page.getByRole('heading', {name: 'Profile'}));

    async goToCreateAccountFromSignInPage() {
        await this.signUpBtn.click();
    }

    async signInAsCandidate() {
        await this.signInUsingEmailBtn.click();
        await this.mailField.fill('');
        await this.passwordField.fill('');
        // await this.signInBtn.click();
    }

    async signInAsCompany() {
        await this.mailField.fill('');
        await this.passwordField.fill('');
        // await this.signInBtn.click();
    }

    async useForgotPasswordOption() {
        await this.forgetPasswordBtn.click();
        await this.mailField.fill('');
        // await this.resetPasswordBtn.click();
    }
}