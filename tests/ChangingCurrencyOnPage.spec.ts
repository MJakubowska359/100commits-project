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
        await headerPage.changeCurrencyFromPlnToEurOnMainPage();
        await expect(page.locator(currency).nth(3)).toContainText('eur');
        await expect(page.locator(currency).nth(8)).toContainText('eur');
        await expect(page.locator(currency).nth(15)).toContainText('eur');
        await headerPage.changeCurrencyFromEurToUsdOnMainPage();
        await expect(page.locator(currency).nth(4)).toContainText('usd');
        await expect(page.locator(currency).nth(9)).toContainText('usd');
        await expect(page.locator(currency).nth(16)).toContainText('usd');
        await headerPage.changeCurrencyFromUsdToGbpOnMainPage();
        await expect(page.locator(currency).nth(2)).toContainText('gbp');
        await expect(page.locator(currency).nth(7)).toContainText('gbp');
        await expect(page.locator(currency).nth(14)).toContainText('gbp');
        await headerPage.changeCurrencyFromGbpToChfOnMainPage();
        await expect(page.locator(currency).nth(1)).toContainText('chf');
        await expect(page.locator(currency).nth(6)).toContainText('chf');
        await expect(page.locator(currency).nth(13)).toContainText('chf');
        await headerPage.changeCurrencyFromChfToDefOnMainPage();
        await expect(page.locator(currency).nth(5)).toContainText('def');
        await expect(page.locator(currency).nth(10)).toContainText('def');
        await expect(page.locator(currency).nth(17)).toContainText('def');
    });
});