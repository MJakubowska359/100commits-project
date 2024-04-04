import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { expect, test } from '@playwright/test';

test.describe('Logging user', () => {
    let generalPage: GeneralPage;
    let headerPage: HeaderPage;
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);
        headerPage = new HeaderPage(page);
        formsPage = new FormsPage(page);

        await page.goto('/');
        await page.waitForLoadState();
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).toBeHidden();
    });

    test('Should be able to login company from top navigation on the main page', async ({
        page,
    }) => {
        await headerPage.goToSignInPageForCompanyFromPageHeader();
        await expect(
            page.getByRole('heading', { name: 'Employer panel', exact: true }),
        ).toBeVisible();
        await formsPage.fillFormToLoginAsCompany();
    });

    test('Should be able to login company from menu on the main page', async ({
        page,
    }) => {
        await headerPage.goToSignInPageForCompanyFromMenuOnMainPage();
        await expect(
            page.getByRole('heading', { name: 'Employer panel', exact: true }),
        ).toBeVisible();
        await formsPage.fillFormToLoginAsCompany();
    });
});
