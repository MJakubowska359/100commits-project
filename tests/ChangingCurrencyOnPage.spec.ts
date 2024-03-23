import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { FiltersPage } from '../pages/filtersPage';

test.describe.only('Changing currency on page', () => {
    let generalPage: GeneralPage;
    let headerPage: HeaderPage;
    let filtersPage: FiltersPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);
        headerPage = new HeaderPage(page);
        filtersPage = new FiltersPage(page);

        await page.goto('/');
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
    })

    test('Should be able to change currency in advertisements of jobs', async ({ page }) => {
        await filtersPage.clickWithSalaryButton();
        await headerPage.changeCurrencyFromPlnToUsdOnMainPage();
        await expect(page.locator('.css-17pspck').nth(3)).toContainText('usd');
        await expect(page.locator('.css-17pspck').nth(8)).toContainText('usd');
        await expect(page.locator('.css-17pspck').nth(15)).toContainText('usd');
    });
});