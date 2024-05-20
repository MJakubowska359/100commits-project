/* eslint-disable playwright/no-focused-test */
import { CandidateAccountPage } from '../src/pages/candidateAccount.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidate1 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Save filtering to subscribe offers', () => {
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
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
  });

  test('Should be able to navigate to chosen parts of account by top menu', async ({
    page,
  }) => {
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);
    await loginPage.clickSignInButton();
    await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
    await candidateAccountPage.clickMyProfileOnHeaderOfPage();
    await candidateAccountPage.goToChartsFromTopMenu();
    await expect(
      page.getByRole('heading', { name: 'No chats yet' }),
    ).toBeVisible();
    await candidateAccountPage.clickMyProfileOnHeaderOfPage();
    await candidateAccountPage.goToSavedSearchesFromTopMenu();
    await expect(
      page.locator('p').filter({ hasText: 'Saved searches' }),
    ).toBeVisible();
    await candidateAccountPage.clickMyProfileOnHeaderOfPage();
    await candidateAccountPage.goToSettingsFromTopMenu();
    await expect(page.getByText('Settings').nth(1)).toBeVisible();
    await candidateAccountPage.clickMyProfileOnHeaderOfPage();
    await candidateAccountPage.clickLogoutInTopMenu();
    await expect(page.getByText('Sign in or sign up')).toBeVisible();
  });

  test('Should be able to navigate to chosen parts of account by side menu', async ({
    page,
  }) => {
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);
    await loginPage.clickSignInButton();
    await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
    await candidateAccountPage.goToChartsFromSideMenu();
    await candidateAccountPage.goToSavedSearchesFromSideMenu();
    await candidateAccountPage.goToSettingsFromSideMenu();
    await candidateAccountPage.clickLogoutInSideMenu();
  });
});
