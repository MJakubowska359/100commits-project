import { CandidateAccountPage } from '../src/pages/candidateAccount.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidate1 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Deleting the candidate account', () => {
  let loginPage: LoginPage;
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let candidateAccountPage: CandidateAccountPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    candidateAccountPage = new CandidateAccountPage(page);
  });

  test('Should be able to delete the candidate account', async ({ page }) => {
    // Arrange
    // Act
    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);
    await loginPage.clickSignInButton();
    await candidateAccountPage.goToSettingsFromSideMenu();
    await candidateAccountPage.changeConsent();
    // Assert
    await expect(page.getByRole('checkbox')).not.toBeChecked(); //do poprawy
  });
});
