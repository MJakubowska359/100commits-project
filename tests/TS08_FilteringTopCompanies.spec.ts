import { FiltersPage } from '../src/pages/filters.page';
import { GeneralPage } from '../src/pages/general.page';
import { TopCompaniesPage } from '../src/pages/topCompanies.page';
import { expect, test } from '@playwright/test';

test.describe('Filtering top companies', () => {
  let generalPage: GeneralPage;
  let topCompaniesPage: TopCompaniesPage;
  let filtersPage: FiltersPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    topCompaniesPage = new TopCompaniesPage(page);
    filtersPage = new FiltersPage(page);

    await page.goto('/brands');
    await generalPage.clickAcceptCookiesOnPage();
  });

  test('Should be able to filtering top companies by type of company', async ({
    page,
  }) => {
    // Arrange
    const expectedChosenTypeOfCompany_1 = 'Software House';
    const expectedChosenTypeOfCompany_2 = 'Corporation';

    // Act
    await topCompaniesPage.clickSoftwareHouseButton();
    await topCompaniesPage.clickCorporationButton();

    // Assert
    await expect(page.locator('ul li').first()).toContainText(
      expectedChosenTypeOfCompany_1,
    );
    await expect(page.locator('ul li').nth(1)).toContainText(
      expectedChosenTypeOfCompany_2,
    );
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
