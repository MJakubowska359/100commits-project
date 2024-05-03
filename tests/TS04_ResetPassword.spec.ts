import { CandidateAccountPage } from '../src/pages/candidateAccount.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidate1 } from '../src/test-data/user.data';
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
  });

  test('Should not be able to reset password in settings of account without filling data', async ({
    page,
  }) => {
    // Arrange
    const expectedChangePasswordSubmitBtn = 'Change password';

    // Act
    await candidateAccountPage.goToSettingsFromSideMenu();
    await candidateAccountPage.clickChangeBtnForChangingPassword();

    // Assert
    await expect(
      page.getByRole('button', { name: expectedChangePasswordSubmitBtn }),
    ).toBeDisabled();
  });
});
