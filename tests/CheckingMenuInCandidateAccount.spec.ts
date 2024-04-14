/* eslint-disable playwright/no-focused-test */

/* eslint-disable prettier/prettier */
import { CandidateAccountPage } from '../pages/candidateAccountPage';
import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { LoginPage } from '../pages/loginPage';
import { expect, test } from '@playwright/test';

test.describe('Save filtering to subscribe offers', () => {
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

  test.only('Should be able to navigate to menu tabs on candidate account', async ({
    page,
  }) => {
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await formsPage.fillFormToLoginAsCandidate();
    await loginPage.clickSignInButton();
    await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
    await candidateAccountPage.clickMyProfileOnHeaderOfPage();
    await candidateAccountPage.goToChartsFromTopMenu();
    await expect(
      page.getByRole('heading', { name: 'No chats yet' }),
    ).toBeVisible();
    await candidateAccountPage.clickMyProfileOnHeaderOfPage();
    await candidateAccountPage.goToSavedSearchesFromTopMenu();
    await expect(page.locator('p').filter({ hasText: 'Saved searches' })).toBeVisible();
    await candidateAccountPage.clickMyProfileOnHeaderOfPage();
    await candidateAccountPage.goToSettingsFromTopMenu();
    await expect(page.getByText('Settings').nth(1)).toBeVisible();
  });
});