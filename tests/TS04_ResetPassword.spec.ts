import { FormsPage } from '../src/pages/forms.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidateEmail } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Reset password to account', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    formsPage = new FormsPage(page);

    await page.goto('/');
    await page.waitForLoadState();
    await generalPage.clickAcceptCookiesOnPage();
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.clickForgotPasswordButton();
    await page.waitForURL('https://profile.justjoin.it/password-reset');
  });

  test('Should be able to reset password by login page', async ({ page }) => {
    // Arrange
    const expectedTextAfterResetPassword =
      'An instruction to change your password will be sent to your email inbox if you have an account associated with the email address.';

    // Act
    await formsPage.fillEmailAddressToResetPassword(candidateEmail);
    await loginPage.clickResetPasswordButton();

    // Assert
    await expect(page.getByText(expectedTextAfterResetPassword)).toBeVisible();
  });

  test('Should not be able to reset password by login page without filing e-mail address', async ({
    page,
  }) => {
    // Arrange
    const expectedError = 'This field is required.';

    // Act
    await loginPage.clickResetPasswordButton();

    // Assert
    await expect(page.getByText(expectedError)).toBeVisible();
  });
});
