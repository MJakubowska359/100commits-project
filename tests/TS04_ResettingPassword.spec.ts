import { FormsPage } from '../src/pages/forms.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { expect, test } from '@playwright/test';

test.describe('Resetting password to account', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    formsPage = new FormsPage(page);

    await page.goto('/');
    await page.waitForLoadState();
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
  });

  test('Should be able to reset password to account', async ({ page }) => {
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await expect(page.getByText('Sign in or sign up')).toBeVisible();
    await loginPage.goToSignInPageByEmail();
    await expect(page.getByText('Sign in to account')).toBeVisible();
    await loginPage.clickForgotPasswordButton();
    await expect(page.getByText('Password assistance')).toBeVisible();
    await loginPage.clickResetPasswordButton();
    await expect(page.getByText('This field is required.')).toBeVisible();
    await formsPage.fillEmailAddressToResetPassword();
    await loginPage.clickResetPasswordButton();
    await expect(
      page.getByText(
        'An instruction to change your password will be sent to your email inbox if you have an account associated with the email address.',
      ),
    ).toBeVisible();
  });
});
