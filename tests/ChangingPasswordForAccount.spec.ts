/* eslint-disable playwright/expect-expect */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable playwright/no-focused-test */
import { CandidateAccountPage } from '../pages/candidateAccountPage';
import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { LoginPage } from '../pages/loginPage';
import { expect, test } from '@playwright/test';

test.describe('Changing password for the account', () => {
  let loginPage: LoginPage;
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let formsPage: FormsPage;
  let candidateAccountPage: CandidateAccountPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    formsPage = new FormsPage(page);
    candidateAccountPage = new CandidateAccountPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
  });

  test('Should be able to change password for the account', async ({
    page,
  }) => {
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await formsPage.fillFormToLoginAsCandidate();
    await loginPage.clickSignInButton();
    await candidateAccountPage.goToSettingsFromTopMenu();
    await candidateAccountPage.changePassword();
  });
});
