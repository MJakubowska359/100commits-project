import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { LoginPage } from '../pages/loginPage';
import { expect, test } from '@playwright/test';

test.describe('Register a new account', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    formsPage = new FormsPage(page);
  });

  test('Should be able to register new account ', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(3000);
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await expect(page.getByText('Sign in or sign up')).toBeVisible();
    await loginPage.goToCreateAccountFromSignInPage();
    await formsPage.fillFormToRegisterNewAccount();
  });
});
