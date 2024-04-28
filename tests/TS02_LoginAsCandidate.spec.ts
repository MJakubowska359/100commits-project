import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidate1 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe("Logging to candidate's profile", () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
  });

  test('Should be able to login candidate from top navigation on the main page', async ({
    page,
  }) => {
    // Arrange
    const expectedLoginHeader = 'Sign in or sign up';
    const expectedLoginByEmailHeader = 'Sign in to account';
    const expectedHeaderOnProfile = 'Profile';

    // Act
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await expect(page.getByText(expectedLoginHeader)).toBeVisible();
    await loginPage.goToSignInPageByEmail();
    await expect(page.getByText(expectedLoginByEmailHeader)).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Sign in' }).nth(1),
    ).toBeDisabled();
    await loginPage.loginCandidateAccount(candidate1);

    // Assert
    await expect(page.getByText(expectedHeaderOnProfile)).toBeVisible();
  });

  test('Should be able to login candidate from menu on the main page', async ({
    page,
  }) => {
    await headerPage.goToSignInPageForCandidateFromMenuOnMainPage();
    await expect(page.getByText('Sign in or sign up')).toBeVisible();
    await loginPage.goToSignInPageByEmail();
    await expect(page.getByText('Sign in to account')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeDisabled();
    await loginPage.loginCandidateAccount(candidate1);
    await loginPage.clickSignInButton();
  });
});
