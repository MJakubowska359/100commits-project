import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidate1 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe("Login to candidate's profile", () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
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

  test('Should not be able to login candidate with wrong email address', async ({
    page,
  }) => {
    // Arrange
    const expectedError = 'Invalid email address.';
    candidate1.userEmail = 'testowyemail';

    // Act
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);

    // Assert
    await expect(page.getByText(expectedError)).toBeVisible();
  });

  test('Should not be able to login candidate without password', async ({
    page,
  }) => {
    // Arrange
    const expectedError = 'This field is required.';
    candidate1.userPassword = '';

    // Act
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);

    // Assert
    await expect(page.getByText(expectedError)).toBeVisible();
  });

  test('Should not be able to login candidate with wrong data', async ({
    page,
  }) => {
    // Arrange
    const expectedError = 'An error has occurred.';
    candidate1.userPassword = '123456';

    // Act
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);

    // Assert
    await expect(page.getByText(expectedError)).toBeVisible();
  });

  test('Should be able to login candidate from menu on the main page', async ({
    page,
  }) => {
    // Arrange
    const expectedHeaderOnProfile = 'Profile';

    // Act
    await headerPage.goToSignInPageForCandidateFromMenuOnMainPage();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);
    await loginPage.clickSignInButton();

    // Assert
    await expect(page.getByText(expectedHeaderOnProfile)).toBeVisible();
  });
});
