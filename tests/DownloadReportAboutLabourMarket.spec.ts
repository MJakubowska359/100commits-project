import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/headerPage';
import { FormsPage } from '../pages/formsPage';

test.describe('Downloading report about labor market', () => {
    let headerPage: HeaderPage;
    let formsPage: FormsPage

    test.beforeEach(async ({ page }) => {
        headerPage = new HeaderPage(page);
        formsPage = new FormsPage(page)

        await page.goto('/');
        await page.getByRole('button', { name: 'ACCEPT ALL' }).click()
    })

    // test('Should not be able to download IT salary report if require fields are empty', async ({ page }) => {
    //     await expect(page.getByRole('heading', { name: 'Zarobki i oczekiwania branży' })).toBeVisible();
    //     await formsPage.fillFormToDownloadReport();
    // });

    test('Should be able to download IT salary report', async ({ page }) => {
        await page.locator('button[name="sidebar-open"]').click();
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'IT Salary Report' }).click();
        const page1 = await page1Promise;
        await expect(page.getByRole('heading', { name: 'Zarobki i oczekiwania branży' })).toBeVisible();
        await formsPage.fillFormToDownloadReport();
        // await expect(page.getByAltText('')).toBeVisible();
    });
});