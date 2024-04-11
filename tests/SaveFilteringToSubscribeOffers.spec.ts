/* eslint-disable prettier/prettier */
import { CandidateAccountPage } from '../pages/candidateAccountPage';
import { FiltersPage } from '../pages/filtersPage';
import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Save filtering to subscribe offers', () => {
    let loginPage: LoginPage;
    let generalPage: GeneralPage;
    let headerPage: HeaderPage;
    let filtersPage: FiltersPage;
    let formsPage: FormsPage;
    let candidateAccountPage: CandidateAccountPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        generalPage = new GeneralPage(page);
        headerPage = new HeaderPage(page);
        filtersPage = new FiltersPage(page);
        formsPage = new FormsPage(page);
        candidateAccountPage = new CandidateAccountPage(page);

        await page.goto('/');
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).toBeHidden();
    });

    test('Should be able to subscribe filtering offers as ANONYMOUS USER', async ({
        page,
    }) => {
        await expect(page.getByLabel('Saved searches')).toBeVisible();
        await headerPage.clickStarIconOnHeaderOfPage();
        await expect(
            page.getByRole('heading', {
                name: "You haven't saved your search criteria yet",
            }),
        ).toBeVisible();
        await headerPage.closeSavedSearches();
        await filtersPage.clickPythonLogo();
        await filtersPage.clickWithSalaryButton();
        await filtersPage.clickRemoteCheckbox();
        await filtersPage.clickSubscribeOption();
        await filtersPage.clickSaveYourSearchCheckbox();
        await headerPage.clickStarIconOnHeaderOfPage();
        await expect(page.getByText('Python Remote With salary')).toBeVisible();
        await expect(
            page.getByRole('button', { name: 'Go to offers' }),
        ).toBeVisible();
        await expect(page.locator('#job-alert-delete-button')).toBeVisible();
        await filtersPage.clickTurnOnEmailNotificationsButton();
        await filtersPage.clickSubscribeOption();
        await expect(
            page.getByRole('heading', { name: 'Add an e-mail notification' }),
        ).toBeVisible();
        await formsPage.fillEmailField();
    });

    test('Should be able to subscribe filtering offers as LOGGED USER', async ({
        page,
    }) => {
        await headerPage.goToSignInPageForCandidateFromPageHeader();
        await loginPage.goToSignInPageByEmail();
        await formsPage.fillFormToLoginAsCandidate();
        await loginPage.clickSignInButton();
        await generalPage.clickLogoJustJoin();
        await filtersPage.clickPythonLogo();
        await filtersPage.clickWithSalaryButton();
        await filtersPage.clickRemoteCheckbox();
        await filtersPage.clickSubscribeOption();
        await filtersPage.clickSaveYourSearchCheckbox();
        await filtersPage.clickTurnOnEmailNotificationsButton();
        await expect(
            page.getByRole('heading', { name: 'Add an e-mail notification' }),
        ).toBeVisible();
        await formsPage.chooseOptionsForSubscribeOffers();
        await candidateAccountPage.clickMyAccount();
        await candidateAccountPage.goToSavedSearchesTabInCandidateMenu();
        await expect(
            page.locator('p').filter({ hasText: 'Saved searches' })).toBeVisible();
        await expect(page.getByText('Python Remote With salary')).toBeVisible();
    });
});
