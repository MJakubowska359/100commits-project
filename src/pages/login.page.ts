import { LoginUserModel } from '../models/user.model';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // locators
  signUpBtn = this.page.getByRole('button', {
    name: "Don't have an account? Sign up",
  });
  signInUsingEmailBtn = this.page.getByRole('button', {
    name: 'Sign in using address email',
  });

  signInBtn = this.page
    .locator('#login-form')
    .getByRole('button', { name: 'Sign in' });
  forgetPasswordBtn = this.page.getByRole('button', {
    name: 'Forgot your password?',
  });
  resetPasswordBtn = this.page.getByRole('button', {
    name: 'Reset password',
  });

  // locators on login page by email
  emailInputOnSignInPage = this.page.getByPlaceholder('name@domain.com');
  passwordInputOnSignInPage = this.page.getByPlaceholder(
    'At least 8 characters',
  );

  async goToCreateAccountFromSignInPage(): Promise<void> {
    await this.signUpBtn.click();
  }

  async goToSignInPageByEmail(): Promise<void> {
    await this.signInUsingEmailBtn.click();
  }

  async clickSignInButton(): Promise<void> {
    await this.signInBtn.click();
  }

  async clickForgotPasswordButton(): Promise<void> {
    await this.forgetPasswordBtn.click();
  }

  async clickResetPasswordButton(): Promise<void> {
    await this.resetPasswordBtn.click();
  }

  async loginCandidateAccount(loginUserData: LoginUserModel): Promise<void> {
    await this.emailInputOnSignInPage.fill(loginUserData.userEmail);
    await this.passwordInputOnSignInPage.fill(loginUserData.userPassword);
    await this.signInBtn.click();
  }
}
