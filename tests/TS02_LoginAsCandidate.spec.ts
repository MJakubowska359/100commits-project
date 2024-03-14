import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { LoginPage } from '../pages/loginPage';

test.describe('Logging user', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  
  test.beforeEach(async ({page}) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);

    await page.goto('/');
    await page.waitForTimeout(3000)
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
  })

  test.only('Should be able to login candidate from top navigation on the main page', async ({ page }) => {
    await headerPage.goToSignInPageFromHeader();
    await expect(page.getByText("Sign in or sign up")).toBeVisible();
    await loginPage.signInAsCandidate();
  });

  test('Should be able to login candidate from menu on the main page', async ({ page }) => {
    await headerPage.goToSignInPageFromMenuOnMainPage();
    await expect(page.getByText("Sign in or sign up")).toBeVisible();
    await loginPage.signInAsCandidate();
  });
});