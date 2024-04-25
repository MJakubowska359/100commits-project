import { FormsPage } from '../src/pages/forms.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { TopCompaniesPage } from '../src/pages/topCompanies.page';
import { expect, test } from '@playwright/test';

test.describe('Filtering top companies', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let topCompaniesPage: TopCompaniesPage;
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    formsPage = new FormsPage(page);
    topCompaniesPage = new TopCompaniesPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
    await page.waitForURL('/', { waitUntil: 'domcontentloaded' });
  });

  test('Should be able to filling data of company and send form about company profile', async ({
    page,
  }) => {
    await headerPage.clickTopCompaniesButtonOnTheMainPage();
    await page.waitForURL('/brands', { waitUntil: 'domcontentloaded' });
    await topCompaniesPage.clickGetStartedButton();
    await expect(
      page.getByRole('heading', {
        name: 'Make yourself known to our community!',
      }),
    ).toBeVisible();
    await formsPage.fillFormToACompanyProfile();
    await expect(page.getByRole('checkbox')).toBeChecked();
    // await formsPage.clickSendARequestToACompanyProfile();
  });
});
