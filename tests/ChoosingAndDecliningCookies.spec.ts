import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';

test.describe('Choosing cookies', () => {
    let generalPage: GeneralPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);

        await page.goto('/');
    })

    test('Should be able to choose performance and functionality cookies', async ({ page }) => {
        await generalPage.clickCustomizeCookiesOnPage();
        await expect(page.getByText('This website uses cookies')).toBeVisible();
        await generalPage.choosePerformanceAndFunctionalityCookiesOnPage();
        await generalPage.saveSettingsOfCookiesAndClose();
        await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
    });

    test('Should be able to decline all cookies', async ({ page }) => {
        await generalPage.clickCustomizeCookiesOnPage();
        await expect(page.getByText('This website uses cookies')).toBeVisible();
        await generalPage.clickDeclineCookies();
        await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
    });
});