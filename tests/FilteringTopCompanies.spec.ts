import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/headerPage';
import { TopCompaniesPage } from '../pages/topCompaniesPage';
import { FiltersPage } from '../pages/filtersPage';
import { FormsPage } from '../pages/formsPage';

test.describe('Filtering top companies', () => {
    let headerPage: HeaderPage;
    let topCompaniesPage: TopCompaniesPage;
    let filtersPage: FiltersPage;
    let formsPage: FormsPage;

    test.only('Should be able to filtering top companies by type', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: 'ACCEPT ALL' }).click()
        await page.waitForTimeout(5000)
        await headerPage.clickTopCompaniesButtonOnTheMainPage();
        await topCompaniesPage.clickSoftwareHouseButton();
        await expect(page.getByText('Software House').nth(5)).toBeVisible();
    });
});