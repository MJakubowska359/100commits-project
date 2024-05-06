import { CandidateAccountPage } from '../src/pages/candidateAccount.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidate1, dataOfPassword } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Reset password to account', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let candidateAccountPage: CandidateAccountPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    candidateAccountPage = new CandidateAccountPage(page);

    await page.goto('/');
    await page.waitForLoadState();
    await generalPage.clickAcceptCookiesOnPage();
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);
    await candidateAccountPage.goToSettingsFromSideMenu();
  });

  test('Should be able to reset password in settings of account', async ({
    page,
  }) => {
    // Arrange
    const expectedConfirmChangedPassword = 'Password has been changed.';

    // Act
    await candidateAccountPage.clickChangeBtnForChangingPassword();
    await candidateAccountPage.changePassword(dataOfPassword);
    await candidateAccountPage.clickChangeBtnForChangingPassword();

    // Assert
    await expect(page.getByText(expectedConfirmChangedPassword)).toBeVisible();
  });

  test('Should not be able to reset password in settings of account with too small new password', async ({
    page,
  }) => {
    // Arrange
    const expectedError =
      'Your password must contain at least 8 characters, including one uppercase letter, one digit, and one special character.';
    dataOfPassword.newPassword = '123456';

    // Act
    await candidateAccountPage.clickChangeBtnForChangingPassword();
    await candidateAccountPage.changePassword(dataOfPassword);

    // Assert
    await expect(page.getByText(expectedError)).toBeVisible();
  });

  test('Should not be able to reset password in settings of account without filling data', async ({
    page,
  }) => {
    // Arrange
    const expectedChangePasswordSubmitBtn = 'Change password';

    // Act
    await candidateAccountPage.clickChangeBtnForChangingPassword();

    // Assert
    await expect(
      page.getByRole('button', { name: expectedChangePasswordSubmitBtn }),
    ).toBeDisabled();
  });
});
