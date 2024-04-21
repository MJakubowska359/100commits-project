import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { TopCompaniesPage } from '../pages/topCompaniesPage';
import { expect, test } from '@playwright/test';

test.describe('Checking require fields on comapny profile', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let topCompaniesPage: TopCompaniesPage;
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    topCompaniesPage = new TopCompaniesPage(page);
    formsPage = new FormsPage(page);
  });

  test('Should not be able to send form about company profile if fields in form are empty', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState();
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
    await page.waitForURL('/', { waitUntil: 'domcontentloaded' });
    await headerPage.clickTopCompaniesButtonOnTheMainPage();
    await page.waitForURL('/brands', { waitUntil: 'domcontentloaded' });
    await topCompaniesPage.clickGetStartedButton();
    await expect(
      page.getByRole('heading', {
        name: 'Make yourself known to our community!',
      }),
    ).toBeVisible();
    await formsPage.clickSendARequestToACompanyProfile();
    await expect(
      page.locator('#name-helper-text').getByText('This field is required'),
    ).toBeVisible();
    await expect(
      page.locator('#email-helper-text').getByText('This field is required'),
    ).toBeVisible();
    await expect(
      page
        .locator('#companyName-helper-text')
        .getByText('This field is required'),
    ).toBeVisible();
    await expect(
      page.getByRole('group').getByText('This field is required'),
    ).toBeVisible();
  });
});
