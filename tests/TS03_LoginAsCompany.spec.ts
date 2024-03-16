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

  test('Should be able to login company from top navigation on the main page', async ({ page }) => {
    await headerPage.goToSignInPageForCompanyFromPageHeader();
    await expect(page.getByRole('heading', { name: 'Employer panel', exact: true })).toBeVisible();
    await loginPage.signInAsCompany();
  });

  test('Should be able to login company from menu on the main page', async ({ page }) => {
    await headerPage.goToSignInPageForCompanyFromMenuOnMainPage();
    await expect(page.getByRole('heading', { name: 'Employer panel', exact: true })).toBeVisible();
    await loginPage.signInAsCompany();
  });
});