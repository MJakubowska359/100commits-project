import { FormsPage } from '../src/pages/forms.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidate1 } from '../src/test-data/user.data';
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
  });

  test('Should not be able to reset password by login page', async ({
    page,
  }) => {
    // Arrange
    const expectedChangePasswordSubmitBtn = 'Change password';

    // Act
    await formsPage.fillEmailAddressToResetPassword(candidate1);
    await loginPage.clickResetPasswordButton();

    // Assert
    await expect(
      page.getByRole('button', { name: expectedChangePasswordSubmitBtn }),
    ).toBeDisabled();
  });
});
