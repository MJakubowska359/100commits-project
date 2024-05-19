import { CandidateAccountPage } from '../src/pages/candidateAccount.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidate1 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Changing consent for the account', () => {
  let loginPage: LoginPage;
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let candidateAccountPage: CandidateAccountPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    candidateAccountPage = new CandidateAccountPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
  });

  test('Should be able to change consent for the account', async ({ page }) => {
    // Act
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);
    await candidateAccountPage.goToSettingsFromSideMenu();
    await candidateAccountPage.changeConsent();

    // Assert
    await expect(page.getByRole('checkbox')).not.toBeChecked();
  });
});
