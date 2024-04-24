import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { RegisterPage } from '../src/pages/register.page';
import { testUser1 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Register a new account', () => {
  test('Should be able to register a new account', async ({ page }) => {
    // Arrange
    const generalPage = new GeneralPage(page);
    const headerPage = new HeaderPage(page);
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);

    const expectedThankForRegistering = 'Thank you for your registration!';
    // Act
    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await expect(page.getByText('Sign in or sign up')).toBeVisible();
    await loginPage.goToCreateAccountFromSignInPage();
    await registerPage.registerANewAccount(testUser1);

    // Assert
    await expect(page.getByText(expectedThankForRegistering)).toBeVisible();
  });
});
