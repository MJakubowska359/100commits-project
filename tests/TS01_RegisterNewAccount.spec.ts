import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { RegisterPage } from '../src/pages/register.page';
import { testUser1 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Register a new account', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await expect(page.getByText('Sign in or sign up')).toBeVisible();
    await loginPage.goToCreateAccountFromSignInPage();
  });

  test('Should be able to register a new account', async ({ page }) => {
    // Arrange
    const expectedThankForRegistering = 'Thank you for your registration!';

    // Act
    await registerPage.registerANewAccount(testUser1);

    // Assert
    await expect(page.getByText(expectedThankForRegistering)).toBeVisible();
  });

  test('Should not be able to register a new account with too short password', async ({
    page,
  }) => {
    // Arrange
    const expectedError =
      'Your password must contain at least 8 characters, including one uppercase letter, one digit, and one special character.';
    testUser1.userPassword = 'oE!c1*';
    testUser1.repeatPassword = 'oE!c1*';

    // Act
    await registerPage.registerANewAccount(testUser1);

    // Assert
    await expect(page.getByText(expectedError)).toBeVisible();
  });
});
