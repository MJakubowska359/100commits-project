import { RegisterUserModel } from '../models/user.model';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class RegisterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  // Locators
  mailInput = this.page.getByPlaceholder('name@domain.com');
  passwordInput = this.page.getByPlaceholder('At least 8 characters');
  repeatPasswordInput = this.page.getByPlaceholder('Same password as above');
  checkboxConfirmTerms = this.page.getByRole('checkbox').nth(0);
  checkboxCommercialCorrespondence = this.page.getByRole('checkbox').nth(1);
  createAccountBtn = this.page.getByRole('button', {
    name: 'Create account',
  });

  async registerANewAccount(
    registerUserData: RegisterUserModel,
  ): Promise<void> {
    await this.mailInput.fill(registerUserData.userEmail);
    await this.passwordInput.fill(registerUserData.userPassword);
    await this.repeatPasswordInput.fill(registerUserData.repeatPassword);
    await this.checkboxConfirmTerms.click();
    await this.createAccountBtn.click();
  }
}
