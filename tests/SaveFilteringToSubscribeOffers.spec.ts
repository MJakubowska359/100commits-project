import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';
import { FiltersPage } from '../pages/filtersPage';
import { FormsPage } from '../pages/formsPage';

test.describe('Save filtering to subscribe offers', () => {
    let generalPage: GeneralPage;
    let filtersPage: FiltersPage;
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);
        filtersPage = new FiltersPage(page);
        formsPage = new FormsPage(page);

        await page.goto('/');
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
    })

    test('Should be able to subscribe filtering offers as ANONYMOUS USER', async ({ page }) => {
        await filtersPage.clickPythonLogo();
        await filtersPage.clickWithSalaryButton();
        await filtersPage.clickRemoteCheckbox();
        await filtersPage.clickSubscribeOption();
        await filtersPage.clickSaveYourSearchCheckbox();
        await filtersPage.clickTurnOnEmailNotificationsButton();
        await expect(page.getByRole('heading', {name: 'Add an e-mail notification'})).toBeVisible();
        await formsPage.fillEmailField();
    });

    test('Should be able to subscribe filtering offers as LOGGED USER', async ({ page }) => {

    });
});