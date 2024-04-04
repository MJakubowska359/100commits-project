import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage';
import { expect, test } from '@playwright/test';

test.describe('Checking require fields on create account', () => {
    let generalPage: GeneralPage;
    let headerPage: HeaderPage;
    let loginPage: LoginPage;
    let registerPage: RegisterPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);
        headerPage = new HeaderPage(page);
        loginPage = new LoginPage(page);
        registerPage = new RegisterPage(page);
    });

    test('Should not be able to creating account if fields in form are empty', async ({
        page,
    }) => {
        await page.goto('/');
        await page.waitForLoadState();
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).toBeHidden();
        await headerPage.goToSignInPageForCandidateFromPageHeader();
        await expect(page.getByText('Sign in or sign up')).toBeVisible();
        await loginPage.goToCreateAccountFromSignInPage();
        await registerPage.clickCreateAccountButton();
        await expect(
            page.getByText('This field is required.').first(),
        ).toBeVisible();
        await expect(
            page.getByText('This field is required.').nth(1),
        ).toBeVisible();
        await expect(
            page.getByText('This field is required.').nth(2),
        ).toBeVisible();
        await expect(
            page.getByText('This field is required.').nth(3),
        ).toBeVisible();
    });
});
