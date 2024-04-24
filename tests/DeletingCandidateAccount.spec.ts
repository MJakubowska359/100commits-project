/* eslint-disable playwright/expect-expect */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable playwright/no-focused-test */
import { CandidateAccountPage } from '../src/pages/candidateAccount.page';
import { FormsPage } from '../src/pages/forms.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { expect, test } from '@playwright/test';

test.describe('Deleting the candidate account', () => {
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

  test('Should be able to delete the candidate account', async ({ page }) => {
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await formsPage.fillFormToLoginAsCandidate();
    await loginPage.clickSignInButton();
    await candidateAccountPage.goToSettingsFromSideMenu();
    await candidateAccountPage.changeConsent();
    await expect(page.getByRole('checkbox')).not.toBeChecked();
  });
});
