import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { FiltersPage } from '../pages/filtersPage';
import { FormsPage } from '../pages/formsPage';

test.describe('Save filtering to subscribe offers', () => {
    let generalPage: GeneralPage;
    let headerPage: HeaderPage;
    let filtersPage: FiltersPage;
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);
        headerPage  = new HeaderPage(page);
        filtersPage = new FiltersPage(page);
        formsPage = new FormsPage(page);

        await page.goto('/');
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
    })

    test.only('Should be able to subscribe filtering offers as ANONYMOUS USER', async ({ page }) => {
        await expect(page.getByLabel('Saved searches')).toBeVisible();
        await headerPage.clickStarIconOnHeaderOfPage();
        await expect(page.getByRole('heading', { name: "You haven't saved your search criteria yet" })).toBeVisible();
        await headerPage.closeSavedSearches();
        await filtersPage.clickPythonLogo();
        await filtersPage.clickWithSalaryButton();
        await filtersPage.clickRemoteCheckbox();
        await filtersPage.clickSubscribeOption();
        await filtersPage.clickSaveYourSearchCheckbox();
        await headerPage.clickStarIconOnHeaderOfPage();
        await expect(page.getByText('Python Remote With salary')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Go to offers' })).toBeVisible();
        await expect(page.locator('#job-alert-delete-button')).toBeVisible();
        await filtersPage.clickTurnOnEmailNotificationsButton();
        await filtersPage.clickSubscribeOption();
        await expect(page.getByRole('heading', {name: 'Add an e-mail notification'})).toBeVisible();
        await formsPage.fillEmailField();
    });

    test('Should be able to subscribe filtering offers as LOGGED USER', async ({ page }) => {

    });
});