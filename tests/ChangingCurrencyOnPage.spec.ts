import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { FiltersPage } from '../pages/filtersPage';

const currency = '.css-17pspck'

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
        await expect(page.locator(currency).nth(3)).toContainText('usd');
        await expect(page.locator(currency).nth(8)).toContainText('usd');
        await expect(page.locator(currency).nth(15)).toContainText('usd');
        await headerPage.changeCurrencyFromUsdToEurOnMainPage();
        await expect(page.locator(currency).nth(4)).toContainText('eur');
        await expect(page.locator(currency).nth(9)).toContainText('eur');
        await expect(page.locator(currency).nth(16)).toContainText('eur');
    });
});