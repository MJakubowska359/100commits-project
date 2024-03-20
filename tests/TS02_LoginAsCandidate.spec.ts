import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { LoginPage } from '../pages/loginPage';
import { FormsPage } from '../pages/formsPage';

test.describe.only("Logging to candidate's profile", () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let formsPage: FormsPage;
  
  test.beforeEach(async ({page}) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    formsPage = new FormsPage(page);

    await page.goto("/");
    await page.waitForTimeout(3000)
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator("#cookiescript_injected")).not.toBeVisible();
  })

  test("Should be able to login candidate from top navigation on the main page", async ({ page }) => {
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await expect(page.getByText("Sign in or sign up")).toBeVisible();
    await loginPage.goToSignInPageByEmail();
    await expect(page.getByText("Sign in to account")).toBeVisible();
    await expect(page.getByRole("button", {name: "Sign in"})).toBeDisabled();
    await formsPage.fillFormToLoginAsCandidate();
    await loginPage.clickSignInButton();
  });

  test('Should be able to login candidate from menu on the main page', async ({ page }) => {
    await headerPage.goToSignInPageForCandidateFromMenuOnMainPage();
    await expect(page.getByText("Sign in or sign up")).toBeVisible();
    await loginPage.goToSignInPageByEmail();
    await expect(page.getByText("Sign in to account")).toBeVisible();
    await expect(page.getByRole('button', {name: 'Sign in'})).toBeDisabled();
    await formsPage.fillFormToLoginAsCandidate();
    await loginPage.clickSignInButton();
  });
});