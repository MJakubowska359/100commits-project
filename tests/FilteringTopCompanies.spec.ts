import { FiltersPage } from '../src/pages/filters.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { TopCompaniesPage } from '../src/pages/topCompanies.page';
import { expect, test } from '@playwright/test';

test.describe('Filtering top companies', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let topCompaniesPage: TopCompaniesPage;
  let filtersPage: FiltersPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    topCompaniesPage = new TopCompaniesPage(page);
    filtersPage = new FiltersPage(page);

    await page.goto('/brands');
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
    await page.waitForLoadState();
    await page.waitForURL('/brands', { waitUntil: 'domcontentloaded' });
  });

  test('Should be able to filtering top companies by type of company', async ({
    page,
  }) => {
    await headerPage.clickTopCompaniesButtonOnTheMainPage();
    await page.waitForURL('/brands', { waitUntil: 'domcontentloaded' });
    await topCompaniesPage.clickSoftwareHouseButton();
    await page.waitForLoadState();
    await expect(page.locator('ul li').first()).toContainText('Software House');
    await topCompaniesPage.clickCorporationButton();
    await page.waitForLoadState();
    await expect(page.locator('ul li').nth(1)).toContainText('Corporation');
  });

  test('Should be able to filtering top companies by name', async ({
    page,
  }) => {
    await filtersPage.fillNameCompanyInSearch();
    await expect(
      page.getByRole('link', { name: 'PKO Bank Polski' }),
    ).toBeVisible();
  });
});
