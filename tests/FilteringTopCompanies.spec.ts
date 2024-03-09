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

    test.beforeEach(async ({ page }) => {
        headerPage = new HeaderPage(page);
        topCompaniesPage = new TopCompaniesPage(page);
        filtersPage = new FiltersPage(page);
        formsPage = new FormsPage(page);

        await page.goto('/brands');
        await page.getByRole('button', { name: 'ACCEPT ALL' }).click();
        await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
        await page.waitForTimeout(5000)
        await page.waitForURL('/brands', {waitUntil: 'domcontentloaded'});
    })

    test('Should be able to filtering top companies by type of company', async ({ page }) => {
        // await headerPage.clickTopCompaniesButtonOnTheMainPage();
        // await page.waitForURL('/brands', {waitUntil: 'domcontentloaded'});
        await topCompaniesPage.clickSoftwareHouseButton();
        await page.waitForTimeout(3000)
        await expect(page.locator('ul li').first()).toContainText('Software House');
        await topCompaniesPage.clickCorporationButton();
        await page.waitForTimeout(3000)
        await expect(page.locator('ul li').nth(1)).toContainText('Corporation');
    });

    test('Should be able to filtering top companies by name', async ({ page }) => {
        await filtersPage.fillNameCompanyInSearch();
        await expect(page.getByRole('link', { name: 'PKO Bank Polski' })).toBeVisible();
    });
});