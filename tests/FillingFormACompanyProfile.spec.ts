import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { TopCompaniesPage } from '../pages/topCompaniesPage';
import { FormsPage } from '../pages/formsPage';

test.describe('Filtering top companies', () => {
    let generalPage: GeneralPage;
    let headerPage: HeaderPage;
    let topCompaniesPage: TopCompaniesPage;
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);
        headerPage = new HeaderPage(page);
        formsPage = new FormsPage(page);
        topCompaniesPage = new TopCompaniesPage(page);

        await page.goto('/');
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
        await page.waitForURL('/', {waitUntil: 'domcontentloaded'});
    })

    test('Should be able to filling data of company and send form about company profile', async ({ page }) => {
        await headerPage.clickTopCompaniesButtonOnTheMainPage();
        await page.waitForURL('/brands', {waitUntil: 'domcontentloaded'});
        await topCompaniesPage.clickGetStartedButton();
        await expect(page.getByRole('heading', {name: 'Make yourself known to our community!' })).toBeVisible();
        await formsPage.fillFormToACompanyProfile();
        await expect(page.getByRole('checkbox')).toBeChecked();
        // await formsPage.clickSendARequestToACompanyProfile();
    });
});