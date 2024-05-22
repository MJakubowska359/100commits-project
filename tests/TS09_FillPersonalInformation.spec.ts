import { CandidateAccountPage } from '../src/pages/candidateAccount.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidateInformation } from '../src/test-data/form.data';
import { candidate2 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Filling personal information in candidate profile', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let candidateAccount: CandidateAccountPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    candidateAccount = new CandidateAccountPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate2);
  });

  test('Should be able to adding photo', async ({ page }) => {
    // Arrange
    const expectedConfirmationAfterSaving = 'Your changes have been saved.';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.addProfilePhotoToAccount();
    await candidateAccount.clickSaveChangesButton();

    // Assert
    await expect(page.getByText(expectedConfirmationAfterSaving)).toBeVisible();
  });

  test('Should be able to adding basic information', async ({ page }) => {
    // Arrange
    const expectedConfirmationAfterSaving = 'Your changes have been saved.';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.fillBasicPersonalInformation(candidateInformation);
    await candidateAccount.clickSaveChangesButton();

    // Assert
    await expect(page.getByText(expectedConfirmationAfterSaving)).toBeVisible();
  });
});
