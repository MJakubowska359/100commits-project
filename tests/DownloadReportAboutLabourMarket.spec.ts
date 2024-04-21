import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { expect, test } from '@playwright/test';

test.describe('Downloading report about labor market', () => {
  let generalPage: GeneralPage;
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    formsPage = new FormsPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
  });

  // test('Should not be able to download IT salary report if require fields are empty', async ({ page }) => {
  //     await expect(page.getByRole('heading', { name: 'Zarobki i oczekiwania branży' })).toBeVisible();
  //     await formsPage.fillFormToDownloadReport();
  // });

  test('Should be able to download IT salary report', async ({ page }) => {
    await page.locator('button[name="sidebar-open"]').click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'IT Salary Report' }).click();
    const page1 = await page1Promise;
    await expect(
      page.getByRole('heading', { name: 'Zarobki i oczekiwania branży' }),
    ).toBeVisible();
    await formsPage.fillFormToDownloadReport();
    // await expect(page.getByAltText('')).toBeVisible();
  });
});
